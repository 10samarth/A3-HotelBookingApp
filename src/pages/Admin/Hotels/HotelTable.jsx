import React from "react";
import Hero from "../../../components/Hero";
import Banner from "../../../components/Banner";
import { Link } from "react-router-dom";
import { FaRegMeh } from "react-icons/fa";

export default function HotelTable(props) {
    const data = props.props
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
            </tr>
          </thead>
          <tbody>
            {data.map((hotel) => (
              <tr key={hotel.sys.id}>
                <td>{hotel.sys.id}</td>
                <td>{hotel.fields.name}</td>
                <td>{hotel.fields.type}</td>
                <td>{hotel.fields.price}</td>
                <td>{hotel.fields.size}</td>
                <td>{hotel.fields.capacity}</td>
                <td>{hotel.fields.pets ? "Yes" : "No"}</td>
                <td>{hotel.fields.breakfast ? "Yes" : "No"}</td>
                <td>{hotel.fields.featured ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
 
    </>
  );
}
