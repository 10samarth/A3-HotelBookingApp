import React from "react";
import { Link } from "react-router-dom";

const customers = [
  { id: 1, name: "John Doe", roomType: "Single Deluxe", checkInDate: "2023-05-15", checkOutDate: "2023-05-20" },
  { id: 2, name: "Jane Smith", roomType: "Double Standard", checkInDate: "2023-05-10", checkOutDate: "2023-05-16" },
  { id: 3, name: "Bob Johnson", roomType: "Family Economy", checkInDate: "2023-05-12", checkOutDate: "2023-05-14" },
  { id: 4, name: "Lisa Chen", roomType: "Single Basic", checkInDate: "2023-05-18", checkOutDate: "2023-05-22" },
  { id: 5, name: "Mike Brown", roomType: "Presidential", checkInDate: "2023-05-05", checkOutDate: "2023-05-10" },
  { id: 6, name: "Karen Lee", roomType: "Double Basic", checkInDate: "2023-05-08", checkOutDate: "2023-05-13" },
  { id: 7, name: "David Kim", roomType: "Single Standard", checkInDate: "2023-05-09", checkOutDate: "2023-05-12" },
  { id: 8, name: "Emily Wong", roomType: "Family Deluxe", checkInDate: "2023-05-16", checkOutDate: "2023-05-19" },
  { id: 9, name: "Chris Wilson", roomType: "Double Economy", checkInDate: "2023-05-11", checkOutDate: "2023-05-14" },
  { id: 10, name: "Julia Martinez", roomType: "Family Standard", checkInDate: "2023-05-14", checkOutDate: "2023-05-20" }
];



function CustomersComponent() {
  return (
    <>
    <div className="container " style={{ marginTop: "150px" }}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Room Type</th>
              <th>Check-In Date</th>
              <th>Check-Out Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.roomType}</td>
                <td>{customer.checkInDate}</td>
                <td>{customer.checkOutDate}</td>
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

export default CustomersComponent;
