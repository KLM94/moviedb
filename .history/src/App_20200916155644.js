import React, { useState } from "react";
import Search from "./components/Search";

function App() {
  const [state, useState] = useState({
    s: "",
    results: [],
    selected: {},
  });

  const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=af16f3d8";

  const handleInput = (e) => {
    let s = e.target.value;
    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Movies</h1>
      </header>
      <main>
        <Search />
      </main>
    </div>
  );
}

export default App;
