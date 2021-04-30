import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import MoviesList from "./components/movies-list.component";
import EditMovie from "./components/edit-movie.component";
import CreateMovie from "./components/create-movie.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={MoviesList} />
      <Route path="/edit/:id" component={EditMovie} />
      <Route path="/create" component={CreateMovie} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
