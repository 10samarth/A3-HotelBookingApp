const mongoose = require('mongoose');

const roomImagesSchema = new mongoose.Schema({
  room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
  imageUrl: { type: String, required: true },
});

const RoomImages = mongoose.model('RoomImages', roomImagesSchema);

module.exports = RoomImages;
