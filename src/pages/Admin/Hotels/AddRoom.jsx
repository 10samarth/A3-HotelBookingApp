import React, { useState } from "react";
import { useContext } from "react";
import { RoomContext } from "../../../context";
import "../Hotels/style.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import room1 from "../../../images/details-1.jpeg";
import room2 from "../../../images/details-2.jpeg";
import room3 from "../../../images/details-3.jpeg";
import room4 from "../../../images/details-4.jpeg";
import img1 from "../../../images/room-1.jpeg";
import img2 from "../../../images/room-2.jpeg";
import img3 from "../../../images/room-3.jpeg";
import img4 from "../../../images/room-4.jpeg";
import img5 from "../../../images/room-5.jpeg";
import img6 from "../../../images/room-6.jpeg";
import img7 from "../../../images/room-7.jpeg";
import img8 from "../../../images/room-8.jpeg";
import img9 from "../../../images/room-9.jpeg";
import img10 from "../../../images/room-10.jpeg";
import img11 from "../../../images/room-11.jpeg";
import img12 from "../../../images/room-12.jpeg";

export default function RoomForm() {
  const context = useContext(RoomContext);
  const { handleChange, addRoom } = context;

  console.log(context);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [capacity, setCapacity] = useState("");
  const [pets, setPets] = useState(false);
  const [breakfast, setBreakfast] = useState(false);
  const [featured, setFeatured] = useState(false);
  const now = new Date();
  const id = now.getTime().toString();
  const handleSubmit = (event) => {
    event.preventDefault();
    const room = {
      id: id,
      name,
      type,
      price: Number(price),
      size: Number(size),
      capacity: Number(capacity),
      pets,
      breakfast,
      featured,

      slug: type,

      description,
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [room1, room2, room3, room4],
    };

    addRoom(room);
    setName("");
    setType("");
    setPrice("");
    setSize("");
    setCapacity("");
    setPets(false);
    setBreakfast(false);
    setFeatured(false);
    history.push("/admin/hotel");
  };

  const history = useHistory();
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginTop: "150px",
        marginLeft: "35px",
        width: "300px",
        padding: "10px",
      }}
    >
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          className="form-control"
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="type">Type:</label>
        <input
          type="text"
          id="type"
          value={type}
          className="form-control"
          onChange={(event) => setType(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="type">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          className="form-control"
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          className="form-control"
          onChange={(event) => setPrice(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="size">Size:</label>
        <input
          type="number"
          id="size"
          value={size}
          className="form-control"
          onChange={(event) => setSize(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="capacity">Capacity:</label>
        <input
          type="number"
          id="capacity"
          value={capacity}
          className="form-control"
          onChange={(event) => setCapacity(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="pets">Pets:</label>
        <input
          type="checkbox"
          id="pets"
          checked={pets}
          className="form-control"
          onChange={(event) => setPets(event.target.checked)}
        />
      </div>
      <div>
        <label htmlFor="breakfast">Breakfast:</label>
        <input
          type="checkbox"
          id="breakfast"
          checked={breakfast}
          className="form-control"
          onChange={(event) => setBreakfast(event.target.checked)}
        />
      </div>
      <div>
        <label htmlFor="featured">Featured:</label>
        <input
          type="checkbox"
          id="featured"
          checked={featured}
          className="form-control"
          onChange={(event) => setFeatured(event.target.checked)}
        />
      </div>
      {/* <Link to="/admin/hotel" className="btn btn-dark">
          Add Room
        </Link> */}

      <div style={{ paddingTop: "10px" }}>
        <button type="submit" className="btn btn-dark">
          Add Room
        </button>{" "}
        <Link to="/admin/hotel" className="btn btn-dark">
          Back
        </Link>
      </div>
    </form>
  );
}
