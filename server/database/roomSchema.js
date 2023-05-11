const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
  size: { type: Number, required: true },
  capacity: { type: Number, required: true },
  pets: { type: Boolean, required: true },
  breakfast: { type: Boolean, required: true },
  featured: { type: Boolean, required: true },
  description: { type: String, required: true },
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
