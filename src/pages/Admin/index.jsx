import React, { useState } from "react";
import { Link } from "react-router-dom";

import AdminHotels from "./Hotels/Hotels";
import CustomersComponent from "./Customer";
import BookingsComponent from "./Bookings";
import AccountsComponent from "./Accounts";
import "./AdminIndex.css"; // Import the CSS file


function AdminIndex() {
  const [selectedLink, setSelectedLink] = useState("hotel");

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <div className="box">
      <div className="sidebar" style={{ marginTop: "10px"}}>
        <div style={{ marginTop: "103px", paddingTop:'15px'  }}>
        <button onClick={() => handleLinkClick("hotel")} className="btn btn-dark">
          Rooms
        </button>



        <button onClick={() => handleLinkClick("bookings")} className="btn btn-dark">
          Bookings
        </button>

        <button onClick={() => handleLinkClick("accounts")} className="btn btn-dark">
          Accounts
        </button>

        <button onClick={() => handleLinkClick("customers")} className="btn btn-dark">
          Customers
        </button>
        </div>
      </div>
      <div className="loadArea">
        {selectedLink === "hotel" && <AdminHotels />}
        {selectedLink === "customers" && <CustomersComponent />}
        {selectedLink === "bookings" && <BookingsComponent />}
        {selectedLink === "accounts" && <AccountsComponent />}
      </div>
    </div>
  );
}

export default AdminIndex;
