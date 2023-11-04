import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TopNav from "./Components/TopNav/TopNav";
import CatNav from "./Components/CatNav/CatNav";

function App() {
  return (
    <div className="App">
      <TopNav />
      <CatNav />
    </div>
  );
}

export default App;
