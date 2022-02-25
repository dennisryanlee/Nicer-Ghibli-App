//*IMPORTS
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//*COMPONENTS
import Home from "./components/Home";
import Characters from "./components/Characters";
import CharacterDetails from "./components/CharacterDetails";
import Films from "./components/Films";
import FilmDetails from "./components/FilmDetails";
import Navbar from "./components/Navbar";

const App = () => {
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/films">
        <Films />
      </Route>
      <Route exact path="/films/:filmid">
        <FilmDetails />
      </Route>
      <Route exact path="/characters">
        <Characters />
      </Route>
      <Route exact path="/character/:characterid">
        <CharacterDetails />
      </Route>
    </Switch>
  </BrowserRouter>;
};

export default App;
