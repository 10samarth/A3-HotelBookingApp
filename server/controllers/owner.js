const express = require('express');
const router = express.Router();
const Hotel = require('../database/hotelSchema');

async function postRoom(req, res) {
  try {
    const { hotelId } = req.params;
    const roomData = req.body;
    const hotel = await Hotel.findById(hotelId);
    hotel.rooms.push(roomData);
    await hotel.save();
    res.status(200).json({ message: 'Room posted successfully', hotel });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while posting the room' });
  }
}

async function getGuests(req, res) {
  try {
    const { hotelId } = req.params;
    const hotel = await Hotel.findById(hotelId);
    const guests = hotel.rooms
      .filter(room => room.status === 'booked')
      .map(room => ({
        type:room.type,
        price:room.price,
        guestName: room.guestName,
        checkInDate: room.checkInDate,
        checkOutDate: room.checkOutDate
      }));

    res.status(200).json({ guests });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the guests' });
  }
}

async function updateRoomDescription(req, res) {
  try {
    const { hotelId, roomId } = req.params; 
    const { description } = req.body; 
    const hotel = await Hotel.findById(hotelId);
    const room = hotel.rooms.id(roomId);
    room.description = description;
    await hotel.save();
    res.status(200).json({ message: 'Room description updated successfully', room });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the room description' });
  }
}

const createHotel = async (req, res) => {
    try {
      const hotelData = req.body;
      const hotel = new Hotel(hotelData);
      await hotel.save();
  
      res.status(201).json({ message: 'Hotel created successfully' });
    } catch (error) {
      console.error('Error creating hotel:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

router.post('/entiredata',createHotel)
router.post('/hotels/:hotelId/rooms', postRoom);
router.get('/hotels/:hotelId/guests', getGuests);
router.post('/hotels/:hotelId/rooms/:roomId/description', updateRoomDescription);

module.exports = router;