import React from "react";
import { Link } from "react-router-dom";

const Characters = (props) => {
  /**
   * props.movies - array of movie objects
   * props.characters - array of movie characters
   * props.locations
   */

  const getMovieTitle = (character) => {
    // console.log(character);
    /**
     * for each character, get that characters films at [0] and get the id
     * then for each movie, compare that movie id to the character film id
     * if they match, return it
     *
     *
     */
    // let movieIDfromChar = character.films[0].substring(38); // this is the movie id from the character
    // props.movies.forEach((film) => {
    //   props.characters.forEach((char) => {
    //     if (char.films[0].substring(38) === film.id) {
    //       return film.title;
    //     }
    //   });
    // });
    // for (let i = 0; i <= props.films.length; i++) {
    //   // this will go thru each film
    //   let movieIDfromMovie = props.films[i].id; // this is the movie id, which we are looking to match to the movie id from character
    //   if (movieIDfromChar === movieIDfromMovie) {
    //     return props.films[i].title; // if it is a match, then return the title
    //   }
    // }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          {props.characters.map((character) => (
            <div key={character.id} className="card col-md-6">
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <button className="btn btn-success btn-sm">Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Characters;

{
  /* <div className="container">
  <div className="row justify-content-center mt-5">
    {props.characters.map((character) => (
      <div key={character.id} className="card col-md-6">
        <div className="card-body">
          <h5 className="card-title">
            {character.name}, {character.gender}, {character.age}
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Eye-color: {character.eye_color} | Hair-Color: {character.hair_color}
          </h6>
          <p className="card-text">Appears in: </p> 
          <footer className="blockquote-footer">
            <a className="btn btn-success btn-sm" href={character.url} target="_blank">
              View my JSON
            </a>
          </footer>
        </div>
      </div>
    ))}
  </div>
</div>; */
}
