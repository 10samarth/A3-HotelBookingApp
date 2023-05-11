import React from "react";
import { NavLink } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import jquery from "jquery";

// for changing navbar  color
jquery(window).scroll(function () {
  jquery("nav").toggleClass("scrolled", jquery(this).scrollTop() > 0);
});

const LogingNavbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-sm py-2 fixed-top"
        style={{backgroundColor: "#17175f"}}>
        <div className="container-fluid ">
          <span className="navbar-brand font-weight-bolder">A3 Spartan Resort</span>
          <a
            href="void(0)"
            className="navbar-toggler border-0"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <FaAlignRight className="nav-icon" />
            </span>
          </a>
        </div>
      </nav>
    </>
  );
};
export default LogingNavbar;
