const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  location: {
    type:String,
  },
  address: {
    type: String,
  },
  rating: {
    type: Number,
    default: 0
  },
  amenities: [String],
  rooms: [{
    name: { type: String},
    slug: { type: String},
    type: { type: String},
    price: { type: Number},
    size: { type: Number},
    capacity: { type: Number},
    pets: { type: Boolean },
    breakfast: { type: Boolean},
    featured: { type: Boolean},
    description: { type: String},
    extras: [{ type: String }],
    images: [{ type: String }],
    guestName: { type: String },
    checkInDate: { type: Date},
    checkOutDate: { type: Date},
    availabilityDate: { type: Date},
    status: { type: String, enum: ['available', 'booked'], default: 'available' }
  }]
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
