const fs = require('fs');

const readableStream = fs.createReadStream('./input.txt', {
    highWaterMark: 15
});

readableStream.on('readable', () => {
    try {
        // Gunakan template literal dengan backticks
        process.stdout.write(`[${readableStream.read()}]`);
    } catch (error) {
    }
});

readableStream.on('end', () => {
    console.log('Done');
});
