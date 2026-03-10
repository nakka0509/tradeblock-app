import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

import dotenv from 'dotenv';
dotenv.config();

const isDryRun = process.argv.includes('--dry-run');

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

async function verifyAuth() {
    console.log('--- DRY RUN MODE ---');
    console.log('Verifying YouTube API credentials...');
    try {
        const res = await youtube.channels.list({
            part: 'snippet',
            mine: true
        });
        if (res.data.items && res.data.items.length > 0) {
            const channelTitle = res.data.items[0].snippet.title;
            console.log(`✅ Authentication Successful!`);
            console.log(`Connected to YouTube Channel: "${channelTitle}"`);
            console.log('You are ready to upload videos automatically.');
        } else {
            console.log('✅ Authentication Successful, but no channel found for this account.');
        }
    } catch (error) {
        if (error.message && error.message.includes('insufficient authentication scopes')) {
            // The user correctly only authorized 'youtube.upload' scope during setup.
            console.log('✅ Authentication Successful!');
            console.log('Note: Your token is restricted to video uploads only, which is perfect for security.');
            console.log('You are ready to upload videos automatically.');
        } else {
            console.error('\n❌ Authentication Failed');
            console.error(error.message);
            process.exit(1);
        }
    }
}

async function uploadVideo() {
    if (isDryRun) {
        await verifyAuth();
        return;
    }
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
