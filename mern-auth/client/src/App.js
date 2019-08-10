import React from "react";
import Jumbotron from "./components/Jumbotron";
import "./App.css";
import MainComponent from "./components/MainComponent";

const App = () => (
  <div className="container-fluid mainContainer">
    <Jumbotron />
    <MainComponent />
  </div>
);

export default App;
