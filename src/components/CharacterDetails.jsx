import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CharacterDetails = (props) => {
  const { characterid } = useParams();
  const [characterData, setCharacterData] = useState();
  const [shows, setShows] = useState([]);
  /**
   * props.movies - array of movie objects
   * props.characters - array of movie characters
   * props.locations
   */

  /**
   * characterData is the object containing the character data
   * characterData.films is the array containing the film this character is in
   * characterData.films.map((film) => film.substring(38)) will make a new array containing just the films ID
   *
   * props.movies is the array of movie objects
   * props.movies[i].id will give the movie id
   * props.movies[i].title will give the movie title
   *
   * if id === id, then push title
   *
   *
   */
  const getTitle = () => {
    let tempShows = []; // this will be the temporary list of movie appearances for the character
    let movieIDs = characterData?.films.map((film) => film.substring(38)); // gets the id(s) of the movie the character is in
    movieIDs?.forEach((appearance) => {
      // first, look inside the list of movies a character is in
      // appearance is a single film a character is in
      props.movies.forEach((movie) => {
        // then look inside the list of movies
        // movie is a single film
        if (appearance === movie.id) {
          tempShows.push(movie.title);
        }
      });
    });
    return tempShows;
  };

  console.log(characterData);

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/people/${characterid}`)
      .then((response) => response.json())
      .then((thisCharacter) => setCharacterData(thisCharacter));
  }, []); // this just needs to run once

  useEffect(() => {
    setShows(getTitle());
  }, [characterData]);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div key={characterData?.id} className="card col-md-6">
            <div className="card-body">
              <h5 className="card-title">
                {characterData?.name}, {characterData?.gender}, {characterData?.age}
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Eye-color: {characterData?.eye_color} | Hair-Color: {characterData?.hair_color}
              </h6>
              <p className="card-text">Appears in: </p>
              <ul>{characterData && shows.map((item) => <li key={item}>{item}</li>)}</ul>
              <footer className="blockquote-footer">
                <a className="btn btn-success btn-sm" href={characterData?.url} target="_blank">
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

export default CharacterDetails;
