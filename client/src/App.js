import React from "react";
import Jumbotron from "./components/Jumbotron";
import "./App.css";
import MainComponent from "./components/MainComponent";
import SearchBar from "./components/SearchBar";

const App = () => (
  <div className="container-fluid mainContainer">
    <Jumbotron />
    <MainComponent />
    <SearchBar />
  </div>
);

export default App;
