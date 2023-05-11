import React from "react";
import Hero from "../../../components/Hero";
import Banner from "../../../components/Banner";
import { Link } from "react-router-dom";
import { FaRegMeh } from "react-icons/fa";

export default function HotelTable(props) {
  const data = props.props;
  return (
    <>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Price</th>
            <th>Size</th>
            <th>Capacity</th>
            <th>Pets</th>
            <th>Breakfast</th>
            <th>Featured</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((hotel) => (
            <tr key={hotel.id}>
              <td>{hotel.id}</td>
              <td>{hotel.name}</td>
              <td>{hotel.type}</td>
              <td>{hotel.price}</td>
              <td>{hotel.size}</td>
              <td>{hotel.capacity}</td>
              <td>{hotel.pets ? "Yes" : "No"}</td>
              <td>{hotel.breakfast ? "Yes" : "No"}</td>
              <td>{hotel.featured ? "Yes" : "No"}</td>
              <td>
                <Link to="/addRoom" className="btn btn-dark" >
                  Edit Room
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
