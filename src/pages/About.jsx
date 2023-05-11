import React from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
function About() {
  return (
    <div className="container aboutus">
      <div className="container aboutus">
        <h2>About Us</h2>
        <p>
          Welcome to our hotel booking app! We are a team of travel enthusiasts
          who believe that booking a hotel should be a seamless and enjoyable
          experience for everyone. Our app is designed to provide you with the
          best selection of hotels at the most competitive prices.
        </p>
        <p>
          Our goal is to make your hotel booking process as simple as possible.
          We understand that planning a trip can be stressful, so we strive to
          make the booking experience easy and hassle-free. Our team is
          available 24/7 to assist you with any questions or concerns you may
          have.
        </p>
        <p>
          With our app, you can browse through thousands of hotels around the
          world, read reviews from other travelers, and book your perfect room
          in just a few clicks. Whether you're traveling for business or
          leisure, we've got you covered.
        </p>
        <p>
          Thank you for choosing our hotel booking app. We look forward to
          helping you plan your next adventure!
        </p>
      </div>
    </div>
  );
}
export default About;
