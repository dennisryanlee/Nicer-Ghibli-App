import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const LocationDetails = (props) => {
  const { locationid } = useParams();
  const [locationData, setLocationData] = useState();

  // console.log(props.characters);
  /**
   * props.movies - array of movie objects
   * props.characters - array of movie characters
   * props.locations
   */

  /**
   * locationData is the object containing the location data
   * locationData.residents is an array containing character URLs
   * locationData.residents.map((person) => person.substring(39)) will make a new array containing just the residentIDs
   *
   * props.characters is the array of character objects
   * props.characters[i].id is the character id
   *
   * once ids match, push props.characters[i].name into some 'residents' array
   * ? ********************************************
   *
   * locationData.films is an array of film URLs
   * locationData.films.map((film) => film.substring(39)) will make a new array containing just the film ID
   *
   * props.movies is the array of movie objects
   * props.movies[i].id is the film ID
   *
   * once ids match, push props.movies[i].title into some 'films' array
   */

  let residents = []; // this will contain the residents' names, which will be pushed into from the getResidents function, and will be used to map over later to produce a JSX list
  const residentIDs = locationData?.residents?.map((person) => person.substring(39)); // this is an array of residents' IDs

  const getResidents = () => {
    residentIDs?.forEach((resident) => {
      // first, look at each resident
      props.characters.forEach((character) => {
        // then look at each character
        if (resident === character.id) {
          // if the IDs match, add the character's name to the residents array
          residents.push(character.name);
        }
      });
    });
  };

  // getResidents(); //? for logging
  // console.log(residents);

  let shows = []; // this will contain the show titles, which will be pushed into from the getShows function, and will be used to map over later to produce a JSX list
  const showIDs = locationData?.films?.map((film) => film.substring(38)); // this is the array of film IDs

  const getShows = () => {
    showIDs?.forEach((show) => {
      // first, look at each show
      props.movies.forEach((movie) => {
        // then look at each movie
        if (show === movie.id) {
          // if the show id from the location matches a movie's id, add the movie's title to the shows array
          shows.push(movie.title);
        }
      });
    });
  };

  // getShows(); //? for logging
  // console.log(shows);

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/locations/${locationid}`)
      .then((response) => response.json())
      .then((thisLocation) => setLocationData(thisLocation));
  }, [locationid]);

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
              <p className="card-text">Residents: nothing for now</p>

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
