const fs = require('fs');
const qr = require('qrcode');

// Room data
const rooms = [
  { name: 'Ortho', id: 'ortho001' },
  { name: 'Cardio', id: 'cardio002' },
  { name: 'Pharmacy', id: 'pharmacy003' },
  { name: 'OT', id: 'OT004'}
];

// Generate QR codes for each room
for (const room of rooms) {
  const roomName = room.name;
  const qrData = roomName; // Data to be encoded in the QR code

  // Generate QR code image
  qr.toFile(`qrcodes/${roomName}.png`, qrData, { errorCorrectionLevel: 'H' }, (err) => {
    if (err) {
      console.error(`Error generating QR code for ${roomName}:`, err);
    } else {
      console.log(`QR code generated for ${roomName}`);
    }
  });
}
