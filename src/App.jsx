//*Imports
import { React, useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//*Components
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Films from "./components/Films";
import FilmDetails from "./components/FilmDetails";
import Characters from "./components/Characters";
import CharacterDetails from "./components/CharacterDetails";
import ErrorLanding from "./components/ErrorLanding";
import Locations from "./components/Locations";
import LocationDetails from "./components/LocationDetails";

const App = () => {
  const [films, setFilms] = useState([]);
  const [people, setPeople] = useState([]);
  const [locations, setLocations] = useState([]);
  const history = useHistory(); // this creates the history object so that i can direct users to the error landing page if the fetch fails

  /**
   * props.movies
   * props.characters
   * props.locations
   */

  //   const history = useHistory();

  const getData = async () => {
    try {
      // fetches data from the api for people
      const response1 = await fetch("https://ghibliapi.herokuapp.com/people"); // this is the fetch
      const peopleData = await response1.json(); // parses the response as JSON data to produce a JS object
      //   console.log(peopleData); // logs the people object
      setPeople(peopleData); // passes the people object to the people state, which is then sent to the components

      // fetches data from the api for films
      const response2 = await fetch("https://ghibliapi.herokuapp.com/films"); // this is the fetch
      const filmData = await response2.json(); // parses the response as JSON data to produce a JS object
      //   console.log(filmData); // logs the films object
      setFilms(filmData); // passes the films object to the films state, which is then sent to the components

      // fetches data from the api for locations
      const response3 = await fetch("https://ghibliapi.herokuapp.com/locations"); // this is the fetch
      const locationdata = await response3.json(); // parses the response as JSON data to produce a JS object
      // console.log(locationdata); // logs the locations object
      setLocations(locationdata); // passes the locations object to the locations state, which is then sent to the components
    } catch (error) {
      //!change this to an implicit return and send user to ErrorLanding view
      // displays an error page if fetch is unsuccessful
      history.push("/errorlanding");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log(films);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/films">
          <Films characters={people} movies={films} locations={locations} />
        </Route>
        <Route exact path="/films/:filmid">
          <FilmDetails characters={people} movies={films} locations={locations} />
        </Route>

        <Route exact path="/characters">
          <Characters characters={people} movies={films} locations={locations} />
        </Route>
        <Route exact path="/characters/:characterid">
          <CharacterDetails characters={people} movies={films} locations={locations} />
        </Route>

        <Route exact path="/locations">
          <Locations characters={people} movies={films} locations={locations} />
        </Route>
        <Route exact path="/locations/:locationid">
          <LocationDetails characters={people} movies={films} locations={locations} />
        </Route>

        <Route exact path="/errorlanding">
          <ErrorLanding />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

/**
 *
 * ? make error landing page work
 * ? lab review video to get nicer film details for characters - 21:51 or 26:00
 * ? use ^^^ to do the same thing for other pages pulling other info
 * ? useParams thing for the details pages
 * todo locations can incorporate people and films
 *
 *
 *
 * //***********************************************************
 *
 *
 * ? have films details page pull and display people data
 * ? have films details page pull and display locations data - they do not point to any specific location
 * ! the short circuit to conditionally display characters is not working as expected
 *
 * todo character details page
 * todo have character details page pull and display movie data .films
 *
 * todo locations details page
 * todo have locations details page pull and display movie data   .films
 * todo have locations details page pull and display characters data  .residents
 *
 *
 */

//! console log within the film details component infinitely logs, something is wrong lol
