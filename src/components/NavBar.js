import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="col-md-12 bg-dark py-2">
      <nav className="navbar bg-dark navbar-dark">
        <div className="d-flex">
          <Link to={"/"} className="navbar-brand ml-5">
            Add Contact
          </Link>
          <Link to={"/charts"} className="navbar-brand ml-5">
            Charts
          </Link>
          <Link to={"/map"} className="navbar-brand ml-5">
            Maps
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
