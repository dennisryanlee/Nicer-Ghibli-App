import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const FilmDetails = (props) => {
  const { filmid } = useParams();
  const [filmData, setFilmData] = useState();

  let cast = []; // this will be pushed into when a cast member from the list of characters is found.  this will then be mapped over for our page
  const getCast = () => {
    let castIDs = filmData?.people.map((char) => char.substring(39)); // makes an array containing the cast IDs
    castIDs?.forEach((castMember) => {
      // castMember is a single cast member's ID
      props.characters.forEach((character) => {
        if (castMember === character.id) {
          cast.push(character.name);
        }
      });
    });
    // console.log(cast);
    return cast;
  };
  /**
   * filmData is the film object for the film we are looking at
   * filmData.people is an array with each element the URL of an individual character
   * filmData.people.map((char) => char.substring(39)) will make a new array containing just the character IDs
   *
   * props.characters is an array of objects, each object is a character
   * props.characters[i].id is the id of an individual character
   *
   * if the above match, then:
   * props.characters[i].name will give us the name we are looking for
   *
   */

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
      .then((response) => response.json())
      .then((thisFilm) => setFilmData(thisFilm));
  }, [filmData]);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div key={filmData?.id} className="card col-md-6">
            <img className="card-img-top" src={filmData?.movie_banner} alt="Card image cap"></img>
            <div className="card-body">
              <h5 className="card-title">
                {filmData?.title} | {filmData?.original_title} | {filmData?.original_title_romanised}
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Directed by: {filmData?.director} | Produced by: {filmData?.producer}
              </h6>
              <p className="card-text">{filmData?.description}</p>

              {/* {cast.length ? <h5>Characters:</h5> : <h5>No cast listed :/</h5>} */}
              <ul>
                {getCast().map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <footer className="blockquote-footer">
                <a className="btn btn-success btn-sm" href={filmData?.url} target="_blank">
                  View my JSON
                </a>
                Release date: {filmData?.release_date} Run time: {Math.floor(filmData?.running_time / 60) + " Hrs " + (filmData?.running_time % 60) + " Mins"}
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilmDetails;
