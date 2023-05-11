const mongoose = require('mongoose');

const roomExtrasSchema = new mongoose.Schema({
  room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
  extraDescription: { type: String, required: true },
});

const RoomExtras = mongoose.model('RoomExtras', roomExtrasSchema);

module.exports = RoomExtras;
