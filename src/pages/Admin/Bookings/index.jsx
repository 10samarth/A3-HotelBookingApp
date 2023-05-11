import React from "react";
import { Link } from "react-router-dom";

const bookings = [
  { id: 1, guestName: "John Doe", checkInDate: "2023-05-15", checkOutDate: "2023-05-20", roomType: "Deluxe", roomNumber: "101", amount: "$1000" },
  { id: 2, guestName: "Jane Smith", checkInDate: "2023-05-10", checkOutDate: "2023-05-16", roomType: "Standard", roomNumber: "102", amount: "$800" },
  { id: 3, guestName: "Bob Johnson", checkInDate: "2023-05-12", checkOutDate: "2023-05-14", roomType: "Basic", roomNumber: "201", amount: "$500" },
  { id: 4, guestName: "Lisa Chen", checkInDate: "2023-05-18", checkOutDate: "2023-05-22", roomType: "Economy", roomNumber: "202", amount: "$400" },
  { id: 5, guestName: "Mike Brown", checkInDate: "2023-05-05", checkOutDate: "2023-05-10", roomType: "Standard", roomNumber: "301", amount: "$800" },
  { id: 6, guestName: "Karen Lee", checkInDate: "2023-05-08", checkOutDate: "2023-05-13", roomType: "Basic", roomNumber: "302", amount: "$500" },
  { id: 7, guestName: "David Kim", checkInDate: "2023-05-09", checkOutDate: "2023-05-12", roomType: "Deluxe", roomNumber: "401", amount: "$1000" },
  { id: 8, guestName: "Emily Wong", checkInDate: "2023-05-16", checkOutDate: "2023-05-19", roomType: "Economy", roomNumber: "402", amount: "$400" },
  { id: 9, guestName: "Chris Wilson", checkInDate: "2023-05-11", checkOutDate: "2023-05-14", roomType: "Standard", roomNumber: "501", amount: "$800" },
  { id: 10, guestName: "Julia Martinez", checkInDate: "2023-05-14", checkOutDate: "2023-05-20", roomType: "Deluxe", roomNumber: "502", amount: "$1000" }
];

function BookingsComponent() {
  return (
    <>
    <div className="container " style={{ marginTop: "150px" }}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Check-In Date</th>
              <th>Check-Out Date</th>
              <th>Room Type</th>
              <th>Room Number</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td>{booking.guestName}</td>
                
                <td>{booking.checkInDate}</td>
                <td>{booking.checkOutDate}</td>
                <td>{booking.roomType}</td>
               
                <td>{booking.roomNumber}</td>
                <td>{booking.amount}</td>
                <td>
                <Link to="/editRoom" className="btn btn-dark" >
                  Edit 
                </Link>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default BookingsComponent;
