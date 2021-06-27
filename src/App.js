import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Header from "./Components/Header.js";
import CharacterTable from "./Components/CharacterTable.js";
import Character from "./Components/Character";

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          <Route exact path="/">
            <CharacterTable />
          </Route>
          <Route exact path="/:character">
            <Character />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}
export default App;
