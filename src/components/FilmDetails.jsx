import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const FilmDetails = () => {
  const { filmid } = useParams();
  const [filmData, setFilmData] = useState();

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
      .then((response) => response.json())
      .then((thisFilm) => setFilmData(thisFilm));
  }, []);

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

{
  /* <Link to="/films" className="btn btn-primary">
Back to Films
</Link> */
}
/**
 *
 * this is working just fine now!!
 *
 * open dev tools, go to components, click on FilmDetails to get the names of the other parts i want to show
 * use similar formatting to the old cards
 *
 *
 *
 */

// {movie.people[0] !== "https://ghibliapi.herokuapp.com/people/" && <h5>Characters:</h5>}
//                 <ul>
//                   {getCharacters(movie).map((item) => (
//                     <li key={item}>{item}</li>
//                   ))}
//                 </ul>
