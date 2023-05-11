const express = require('express');
const router = express.Router();
const Hotel = require('../database/hotelSchema');

router.get('/hotels', async (req, res) => {
    const { location, date, numPeople } = req.body;
  
    try {
      const hotels = await Hotel.find({
        location: { $regex: new RegExp(location, 'i') },
        'rooms.availabilityDate': { $gte: new Date(date) },
        'rooms.capacity': { $gte: parseInt(numPeople) }
      });
  
      res.json({ hotels });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  

router.post('/hotels/:hotelId/book', async (req, res) => {
    const { hotelId } = req.params;
    const { roomId, guestName, checkInDate, checkOutDate } = req.body;
  
    try {
      const hotel = await Hotel.findById(hotelId);
  
      if (!hotel) {
        return res.status(404).json({ message: 'Hotel not found' });
      }
  
      const room = hotel.rooms.id(roomId);
  
      if (!room) {
        return res.status(404).json({ message: 'Room not found' });
      }
  
      const availabilityDate = new Date(room.availabilityDate);
      const checkIn = new Date(checkInDate);
      const checkOut = new Date(checkOutDate);
      console.log(availabilityDate)
      console.log(checkIn)
      console.log(checkOut)
  
      const availability = availabilityDate >= checkIn && availabilityDate <= checkOut;
  
      if (!availability) {
        return res.status(400).json({ message: 'Room is not available for the selected dates' });
      }
  
      room.status = 'booked';
      room.guestName = guestName;
      room.checkInDate = checkInDate;
      room.checkOutDate = checkOutDate;
      room.availabilityDate = checkOutDate;
  
      await hotel.save();
  
      res.json({ message: 'Room booked successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  

router.get('/hotels/:hotelId/rooms', async (req, res) => {
    const { hotelId } = req.params;
    const { date, numPeople } = req.body;
  
    try {
      const hotel = await Hotel.findById(hotelId);
  
      if (!hotel) {
        return res.status(404).json({ message: 'Hotel not found' });
      }
  
      const availableRooms = hotel.rooms.filter(
        (room) =>
          room.availabilityDate >= new Date(date) &&
          room.capacity >= parseInt(numPeople)
      );
  
      res.json({ rooms: availableRooms });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
module.exports = router;
