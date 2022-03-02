import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="d-flex justify-content-center mt-3">
      <Link to="/" className="btn btn-primary nav-link mx-2 text-light">
        Home
      </Link>
      <Link to="/films" className="btn btn-primary nav-link mx-2 text-light">
        Films
      </Link>
      <Link to="/characters" className="btn btn-primary nav-link mx-2 text-light">
        Characters
      </Link>
      <Link to="/locations" className="btn btn-primary nav-link mx-2 text-light">
        Locations
      </Link>
    </nav>
  );
};

export default Navbar;
