const fs = require('fs');

// Buat readable stream dengan highWaterMark 15 karakter
const readableStream = fs.createReadStream('input.txt', {
    highWaterMark: 15
});

// Buat writable stream untuk menulis ke output.txt
const writableStream = fs.createWriteStream('output.txt');

// Event untuk menangani pembacaan data
readableStream.on('data', (chunk) => {
    // Tulis setiap bagian teks yang dibaca ke writable stream, dipisahkan dengan baris baru
    writableStream.write(chunk + '\n');
});

// Event untuk menangani ketika stream selesai
readableStream.on('end', () => {
    console.log('Teks berhasil diproses dan ditulis ulang.');
});

// Event untuk menangani kesalahan
readableStream.on('error', (error) => {
    console.error('Error saat membaca file:', error);
});

writableStream.on('error', (error) => {
    console.error('Error saat menulis file:', error);
});