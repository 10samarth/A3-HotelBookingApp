import React, { useState } from 'react';
import '../Hotels/style.css'
import { Link } from "react-router-dom";

export default function RoomForm({ onAdd }) {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');
  const [size, setSize] = useState('');
  const [capacity, setCapacity] = useState('');
  const [pets, setPets] = useState(false);
  const [breakfast, setBreakfast] = useState(false);
  const [featured, setFeatured] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const room = {
      name,
      type,
      price: Number(price),
      size: Number(size),
      capacity: Number(capacity),
      pets,
      breakfast,
      featured
    };
    onAdd(room);
    setName('');
    setType('');
    setPrice('');
    setSize('');
    setCapacity('');
    setPets(false);
    setBreakfast(false);
    setFeatured(false);
  };

  return (
    <form onSubmit={handleSubmit}  style={{ marginTop: "150px" , marginLeft:"35px", width:"300px"}}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name}  className="form-control" onChange={(event) => setName(event.target.value)} />
      </div>
      <div>
        <label htmlFor="type">Type:</label>
        <input type="text" id="type" value={type} className="form-control"  onChange={(event) => setType(event.target.value)} />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" value={price} className="form-control"  onChange={(event) => setPrice(event.target.value)} />
      </div>
      <div>
        <label htmlFor="size">Size:</label>
        <input type="number" id="size" value={size} className="form-control"  onChange={(event) => setSize(event.target.value)} />
      </div>
      <div>
        <label htmlFor="capacity">Capacity:</label>
        <input type="number" id="capacity" value={capacity} className="form-control"  onChange={(event) => setCapacity(event.target.value)} />
      </div>
      <div>
        <label htmlFor="pets">Pets:</label>
        <input type="checkbox" id="pets" checked={pets} className="form-control"  onChange={(event) => setPets(event.target.checked)} />
      </div>
      <div>
        <label htmlFor="breakfast">Breakfast:</label>
        <input type="checkbox" id="breakfast" checked={breakfast} className="form-control"  onChange={(event) => setBreakfast(event.target.checked)} />
      </div>
      <div>
        <label htmlFor="featured">Featured:</label>
        <input type="checkbox" id="featured" checked={featured} className="form-control"  onChange={(event) => setFeatured(event.target.checked)} />
      </div>
      <Link to="/admin/hotel" className="btn btn-dark">
          Add Room
        </Link>
    </form>
  );
}
