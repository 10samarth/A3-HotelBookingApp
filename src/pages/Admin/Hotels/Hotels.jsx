import React, { useState } from "react";
import Hero from "../../../components/Hero";
import Banner from "../../../components/Banner";
import { Link } from "react-router-dom";
import { FaRegMeh } from "react-icons/fa";
import data from "../../../data";
import HotelTable from "./HotelTable";

export default function AdminHotels() {
    const hotelData = data;

  return (
    <>
      <div className="container " style={{ marginTop: "150px" }}>
        <Link to="/addRoom" className="btn btn-dark">
          Add Room
        </Link>
        <br />
        <div style={{ marginTop: "15px" }}>
        <HotelTable props = {hotelData}/>
        </div>
      </div>
    </>
  );
}
