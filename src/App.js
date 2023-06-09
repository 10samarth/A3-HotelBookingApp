import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Booknow from "./pages/Booknow";

import AdminIndex from './pages/Admin';
import AdminHotels from './pages/Admin/Hotels/Hotels';
import RoomForm from './pages/Admin/Hotels/AddRoom';
import LoginSignup from './pages/authentication/login';
import ChatComponent from './pages/Chat/Chat';
import EditBooking from "./pages/Admin/Bookings/editBooking";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginSignup} />
          <Route>
            <Navbar />
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/rooms" component={Rooms} />
              <Route exact path="/rooms/:slug" component={SingleRoom} />
              <Route exact path="/booknow/:slug" component={Booknow} />

              <Route exact path="/admin" component={AdminIndex} />
              <Route exact path="/admin/hotel" component={AdminHotels} />
              <Route exact path="/addRoom" component={RoomForm} />

              <Route exact path="/chat" component={ChatComponent} />

              <Route component={Error} />
            </Switch>
            <Footer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
