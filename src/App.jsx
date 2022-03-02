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

  /** the props object contains:
   * props.movies
   * props.characters
   * props.locations
   */

  const getData = async () => {
    try {
      // fetches data from the api for people
      const response1 = await fetch("https://ghibliapi.herokuapp.com/people"); // this is the fetch
      const peopleData = await response1.json(); // parses the response as JSON data to produce a JS object
      setPeople(peopleData); // passes the people object to the people state, which is then sent to the components

      // fetches data from the api for films
      const response2 = await fetch("https://ghibliapi.herokuapp.com/films"); // this is the fetch
      const filmData = await response2.json(); // parses the response as JSON data to produce a JS object
      setFilms(filmData); // passes the films object to the films state, which is then sent to the components

      // fetches data from the api for locations
      const response3 = await fetch("https://ghibliapi.herokuapp.com/locations"); // this is the fetch
      const locationdata = await response3.json(); // parses the response as JSON data to produce a JS object
      setLocations(locationdata); // passes the locations object to the locations state, which is then sent to the components
    } catch (error) {
      history.push("/errorlanding"); // displays an error page if fetch is unsuccessful
    }
  };

  useEffect(() => {
    getData(); // fetches people, films, and locations data after the home page renders
  }, []); // empty dependency array means we only fetch this data once

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
 * ?done make error landing page work
 * ?done lab review video to get nicer film details for characters - 21:51 or 26:00
 * ?done use ^^^ to do the same thing for other pages pulling other info
 * ?done useParams thing for the details pages
 * ?done locations can incorporate people and films
 *
 *
 *
 * //***********************************************************
 *
 *
 * ?done have films details page pull and display people data
 * ?done have films details page pull and display locations data - they do not point to any specific location
 * ! the short circuit to conditionally display characters is not working as expected
 *
 * ?done character details page
 * ?done have character details page pull and display movie data .films
 *
 * ?done locations details page
 * ?done have locations details page pull and display movie data   .films
 * ?done have locations details page pull and display characters data  .residents
 *
 *
 */

//! console log within the film details component infinitely logs, something is wrong lol

/**
 * todo
 * film details: does not show this properly
 * {cast.length >= 1 ? <h5>Characters:</h5> : <h5>No cast listed :/</h5>}
 *
 * todo
 * character details: get title function throws errors, does not display
 *
 * todo
 * location details: neither function gets the relevant data to show
 */
