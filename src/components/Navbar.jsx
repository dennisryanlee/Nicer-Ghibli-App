import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="d-flex justify-content-center mt-3">
      <Link exact to="/" className="btn btn-primary nav-link mx-2 text-light">
        Home
      </Link>
      <Link exact to="/films" className="btn btn-primary nav-link mx-2 text-light">
        Films
      </Link>
      <Link exact to="/characters" className="btn btn-primary nav-link mx-2 text-light">
        Characters
      </Link>
    </nav>
  );
};

export default Navbar;
