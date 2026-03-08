import fs from 'fs';
import path from 'path';

// Instagram Graph API requires the video to be hosted on a public URL.
// We will use a temporary file hosting service (e.g., tmpfiles.org) to host it for a few minutes while Meta downloads it.
async function uploadToTempHost(filePath: string): Promise<string> {
    console.log(`[Upload] Uploading ${filePath} to temporary storage...`);
    const form = new FormData();
    // Using Blob since Node 18+ natively supports standard Fetch API and FormData
    const buffer = fs.readFileSync(filePath);
    const blob = new Blob([buffer]);
    form.append('file', blob, path.basename(filePath));

    const response = await fetch('https://tmpfiles.org/api/v1/upload', {
        method: 'POST',
        body: form,
    });

    if (!response.ok) {
        throw new Error(`Failed to upload to temp host: ${response.statusText}`);
    }

    const result = await response.json();
    // tmpfiles.org returns {"status":"success","data":{"url":"https://tmpfiles.org/12345/video.mp4"}}
    // But the direct download URL is https://tmpfiles.org/dl/12345/video.mp4
    const pageUrl = result.data.url;
    const directUrl = pageUrl.replace('tmpfiles.org/', 'tmpfiles.org/dl/');
    console.log(`[Upload] Success! Temporary public URL: ${directUrl}`);
    return directUrl;
}

// Post to Instagram Reels via the Graph API
async function postToInstagram(videoUrl: string, caption: string) {
    const IG_USER_ID = process.env.IG_USER_ID;
    const IG_ACCESS_TOKEN = process.env.IG_ACCESS_TOKEN;

    if (!IG_USER_ID || !IG_ACCESS_TOKEN) {
        throw new Error('Missing IG_USER_ID or IG_ACCESS_TOKEN in environment variables.');
    }

    console.log('[Instagram] Step 1: Initializing media container creation...');
    const createContainerUrl = `https://graph.facebook.com/v19.0/${IG_USER_ID}/media`;

    const initParams = new URLSearchParams({
        media_type: 'REELS',
        video_url: videoUrl,
        caption: caption,
        access_token: IG_ACCESS_TOKEN,
    });

    const initRes = await fetch(`${createContainerUrl}?${initParams.toString()}`, { method: 'POST' });
    const initData = await initRes.json();

    if (!initRes.ok || initData.error) {
        throw new Error(`Failed to create container: ${JSON.stringify(initData.error)}`);
    }

    const containerId = initData.id;
    console.log(`[Instagram] Container created successfully. ID: ${containerId}`);

    // Step 2: Meta downloads the video from the URL. We must wait until the status is 'FINISHED'
    console.log('[Instagram] Step 2: Waiting for Meta to process the video...');
    let isFinished = false;
    let attempts = 0;
    while (!isFinished && attempts < 20) {
        await new Promise(resolve => setTimeout(resolve, 5000)); // wait 5 seconds between checks
        attempts++;

        const statusObj = await fetch(`https://graph.facebook.com/v19.0/${containerId}?fields=status_code&access_token=${IG_ACCESS_TOKEN}`);
        const statusData = await statusObj.json();

        const status = statusData.status_code;
        console.log(`   - Status check ${attempts}: ${status}`);

        if (status === 'FINISHED') {
            isFinished = true;
        } else if (status === 'ERROR') {
            throw new Error(`Instagram video processing failed.`);
        }
    }

    if (!isFinished) {
        throw new Error('Video processing timed out on Meta servers.');
    }

    // Step 3: Publish the Reel container
    console.log('[Instagram] Step 3: Publishing the Reel...');
    const publishUrl = `https://graph.facebook.com/v19.0/${IG_USER_ID}/media_publish`;

    const publishParams = new URLSearchParams({
        creation_id: containerId,
        access_token: IG_ACCESS_TOKEN,
    });

    const publishRes = await fetch(`${publishUrl}?${publishParams.toString()}`, { method: 'POST' });
    const publishData = await publishRes.json();

    if (!publishRes.ok || publishData.error) {
        throw new Error(`Failed to publish: ${JSON.stringify(publishData.error)}`);
    }

    console.log(`[Instagram] Success! Reel published successfully. Media ID: ${publishData.id}`);
}

// Main execution block
async function main() {
    try {
        const videoFile = process.argv[2];
        if (!videoFile || !fs.existsSync(videoFile)) {
            console.error('Usage: npx tsx scripts/post_to_instagram.ts <path-to-video.mp4> "Caption text"');
            process.exit(1);
        }

        // Default caption uses viral hashtags related to trading/investing
        const caption = process.argv[3] || "あなたのトレード、客観視できていますか？感情に振り回されない強制ロックアプリ「Trade Block」 #FX #デイトレ #株式投資 #ポジポジ病";

        // 1. Upload locally rendered video to temporary internet host
        const tempUrl = await uploadToTempHost(videoFile);

        // 2. Transmit to Instagram
        await postToInstagram(tempUrl, caption);

    } catch (error: any) {
        console.error('Error during Instagram posting process:', error.message);
        process.exit(1);
    }
}

main();
