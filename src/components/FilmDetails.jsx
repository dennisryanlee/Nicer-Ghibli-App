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

  return <>This is FilmDetails for {`${filmData?.title || "LOADING Y'ALL"}`}</>;
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
