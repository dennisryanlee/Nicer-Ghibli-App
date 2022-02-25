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

const App = () => {
  const [films, setFilms] = useState([]); // controls the films state
  const [people, setPeople] = useState([]); // controls the people state

  //   const history = useHistory();

  const getData = async () => {
    try {
      // fetches data from the api
      const response1 = await fetch("https://ghibliapi.herokuapp.com/people"); // this is the fetch
      const peopleData = await response1.json(); // parses the response as JSON data to produce a JS object
      //   console.log(peopleData); // logs the people object
      setPeople(peopleData); // passes the people object to the people state, which is then sent to the People Component

      // fetches data from the api
      const response = await fetch("https://ghibliapi.herokuapp.com/films"); // this is the fetch
      const filmData = await response.json(); // parses the response as JSON data to produce a JS object
      //   console.log(filmData); // logs the films object
      setFilms(filmData); // passes the films object to the films state, which is then sent to the Films Component
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
        <Route exact path="/errorlanding">
          <ErrorLanding />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
