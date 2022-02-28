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
  const [films, setFilms] = useState([]); // controls the films state
  const [people, setPeople] = useState([]); // controls the people state
  const [locations, setLocations] = useState([]); // controls the locations state

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
      console.log(locationdata); // logs the locations object
      setLocations(locationdata); // passes the locations object to the locations state, which is then sent to the components
    } catch (error) {
      //!change this to an implicit return and send user to ErrorLanding view
      // displays an error page if fetch is unsuccessful
      //   history.push("/errorlanding");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/films">
          <Films characters={people} movies={films} />
        </Route>
        <Route exact path="/films/:filmid">
          <FilmDetails />
        </Route>

        <Route exact path="/characters">
          <Characters characters={people} movies={films} />
        </Route>
        <Route exact path="/character/:characterid">
          <CharacterDetails />
        </Route>

        <Route exact path="/locations">
          <Locations characters={people} movies={films} location={locations} />
        </Route>
        <Route exact path="/locations/:locationid">
          <LocationDetails />
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
 * todo make error landing page work
 * todo lab review video to get nicer film details for characters - 21:51 or 26:00
 * todo useParams thing for the details pages
 * todo locations can incorporate people and films
 * todo make JSON buttons appear at the bottom of each card
 * todo make each movie card the same size as character lists / descriptions change their lengths
 *
 *
 *
 *
 *
 *
 *
 */
