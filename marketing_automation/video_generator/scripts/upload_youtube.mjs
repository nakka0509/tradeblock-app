import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

// Load environment variables if needed
// import dotenv from 'dotenv';
// dotenv.config();

const CLIENT_ID = process.env.YOUTUBE_CLIENT_ID;
const CLIENT_SECRET = process.env.YOUTUBE_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.YOUTUBE_REFRESH_TOKEN;

if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
    console.error('Error: YOUTUBE_CLIENT_ID, YOUTUBE_CLIENT_SECRET, or YOUTUBE_REFRESH_TOKEN is missing.');
    process.exit(1);
}

const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    "https://developers.google.com/oauthplayground" // This redirect URI matches the one we configured
);

oauth2Client.setCredentials({
    refresh_token: REFRESH_TOKEN
});

const youtube = google.youtube({ version: 'v3', auth: oauth2Client });

async function uploadVideo() {
    const videoPath = path.resolve('./out/video.mp4');

    if (!fs.existsSync(videoPath)) {
        console.error(`Error: Video file not found at ${videoPath}`);
        process.exit(1);
    }

    console.log(`Uploading ${videoPath} to YouTube...`);

    try {
        const res = await youtube.videos.insert({
            part: 'snippet,status',
            requestBody: {
                snippet: {
                    title: 'Stop Overtrading - Take Control #shorts #forex', // Adjust title as needed
                    description: 'Trade Block is the ultimate app for day traders. 👇 Download now: [Link] #shorts #tradingpsychology',
                    tags: ['shorts', 'forex', 'daytrading', 'crypto', 'tradingpsychology'],
                    categoryId: '27' // Category 27 is Education
                },
                status: {
                    privacyStatus: 'public', // Change to 'private' or 'unlisted' if testing
                    selfDeclaredMadeForKids: false
                }
            },
            media: {
                body: fs.createReadStream(videoPath)
            }
        });

        console.log('\n✅ Success! Video uploaded.');
        console.log(`YouTube ID: ${res.data.id}`);
        console.log(`URL: https://youtube.com/shorts/${res.data.id}`);

    } catch (error) {
        console.error('\n❌ Failed to upload video');
        console.error(error.message);
        if (error.response && error.response.data) {
            console.error('Detailed Error:', JSON.stringify(error.response.data, null, 2));
        }
        process.exit(1);
    }
}

uploadVideo();
