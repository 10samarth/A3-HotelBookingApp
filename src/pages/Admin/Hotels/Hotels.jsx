import React, { useState } from "react";
import Hero from "../../../components/Hero";
import Banner from "../../../components/Banner";
import { Link } from "react-router-dom";
import { FaRegMeh } from "react-icons/fa";
import HotelTable from "./HotelTable";
import { withRoomConsumer } from '../../../context';
import Loading from '../../../components/Loading';
import RoomForm from "./AddRoom";

function AdminHotels({ context }) {

  const { loading, sortedRooms, rooms, addRoom } = context;
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="container " style={{ marginTop: "150px" }}>
        <Link to="/addRoom" className="btn btn-dark">
          Add Room
        </Link>
        {/* <RoomForm onAdd={addRoom} /> */}
        <br />
        <div style={{ marginTop: "15px" }}>
          <HotelTable props={rooms} />
        </div>
      </div>
    </>
  );
}

export default withRoomConsumer(AdminHotels)
