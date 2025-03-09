import "./App.css";
import Search from "../Search/Search";
import { useState } from "react";
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);
  return (
    <>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./heroImg.png" alt="hero-title" />

          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without the Hassle
          </h1>
        </header>
        <Search serchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </>
  );
}

export default App;
