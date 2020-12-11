import React, { Component } from "react";
import movies from "../images/movies.jpg";

export class App extends Component {
  render() {
    return (
      <div>
        <p className="movies-title">Movies!</p>
        <div className="movies-image"><img src={movies} alt="Image name"/></div>
      </div>
    )
  }
}

export default App