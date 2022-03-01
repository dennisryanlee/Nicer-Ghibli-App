import React from "react";
import { Link } from "react-router-dom";

const Characters = (props) => {
  /**
   * props.movies - array of movie objects
   * props.characters - array of movie characters
   * props.locations
   */

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          {props.characters.map((character) => (
            <div key={character.id} className="card col-md-6">
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <Link to={`/characters/${character.id}`} className="btn btn-success btn-sm">
                  Details
                </Link>
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
