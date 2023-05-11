import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

export default function Home() {
  return (
    <>
      <Hero hero="defaultHero"></Hero>
      <Banner
        title="Experience the ultimate Spartan luxury"
        subtitle="Rooms starting at 100$"
      >
        <Link to="/rooms" className="btn  btn-dark">
          Our Rooms
        </Link>
        <hr></hr>
        <Link to="/chat" className="btn  btn-dark">
          Chat with Sammy Ai
        </Link>
      </Banner>

      <Services />
      <FeaturedRooms />
    </>
  );
}
