import React from "react";
import { Link } from "react-router-dom";

const Locations = (props) => {
  /**
   * props.movies
   * props.characters
   * props.locations
   */
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          {props.locations.map((locale) => (
            <div key={locale.id} className="card col-md-6">
              <div className="card-body">
                <h5 className="card-title">{locale.name}</h5>
                <button className="btn btn-success btn-sm">Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Locations;

{
  /* <div className="container">
  <div className="row justify-content-center mt-5">
    {props.locations.map((locale) => (
      <div key={locale.id} className="card col-md-6">
        <div className="card-body">
          <h5 className="card-title">{locale.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Climate: {locale.climate} | Terrain: {locale.terrain} | Surface Water: {locale.surface_water}
          </h6>
          <p className="card-text">As seen in: nothing for now</p>
          <footer className="blockquote-footer">
            <a className="btn btn-success btn-sm" href={locale.url} target="_blank">
              View my JSON
            </a>
          </footer>
        </div>
      </div>
    ))}
  </div>
</div>; */
}
