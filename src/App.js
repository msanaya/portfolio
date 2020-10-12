import React from 'react';
import Header from "../src/Components/Header/Header";
import AboutMe from "../src/Components/AboutMe/AboutMe";
import AboutMeLong from "../src/Components/AboutMe/AboutMeLong";
import Projects from "../src/Components/Projects/Projects"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <AboutMeLong />
      <Projects />
    </div>
  );
}

export default App;
