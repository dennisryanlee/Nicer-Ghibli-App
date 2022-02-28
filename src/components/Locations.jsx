import React from "react";
import { Link } from "react-router-dom";

const Locations = (props) => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          {props.location.map((location) => (
            <div key={location.id} className="card col-md-6">
              <div className="card-body">
                <h5 className="card-title">{location.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Climate: {location.climate} | Terrain: {location.terrain} | Surface Water: {location.surface_water}
                </h6>
                <p className="card-text">As seen in: nothing for now</p>
                <footer className="blockquote-footer">
                  <a className="btn btn-success btn-sm" href={location.url} target="_blank">
                    View my JSON
                  </a>
                </footer>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Locations;
