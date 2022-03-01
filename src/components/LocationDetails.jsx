import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const LocationDetails = () => {
  const { locationid } = useParams();
  const [locationData, setLocationData] = useState();

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/locations/${locationid}`)
      .then((response) => response.json())
      .then((thisLocation) => setLocationData(thisLocation));
  }, []);

  //!  fetch does not receive the character id properly - why?

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div key={locationData?.id} className="card col-md-6">
            <div className="card-body">
              <h5 className="card-title">{locationData?.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Climate: {locationData?.climate} | Terrain: {locationData?.terrain} | Surface Water: {locationData?.surface_water}
              </h6>
              <p className="card-text">As seen in: nothing for now</p>
              <footer className="blockquote-footer">
                <a className="btn btn-success btn-sm" href={locationData?.url} target="_blank">
                  View my JSON
                </a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationDetails;

{
  /* <Link to="/locations" className="btn btn-primary">
    Back to Locations
</Link> */
}
