import React from "react";
import { Navlink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Navlink exact to="/" className="btn btn-primary nav-link" activeClassName="makethisstandoutsinceitisitheactivelink">
        Home
      </Navlink>
      <Navlink exact to="/films" className="btn btn-primary nav-link" activeClassName="makethisstandoutsinceitisitheactivelink">
        Films
      </Navlink>
      <Navlink exact to="/characters" className="btn btn-primary nav-link" activeClassName="makethisstandoutsinceitisitheactivelink">
        Characters
      </Navlink>
    </>
  );
};

export default Navbar;
