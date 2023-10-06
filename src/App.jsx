// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./Components/Navbar";
import Jobs from "./Components/Jobs";
import Search from "./Components/Search";
import Values from "./Components/Values";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="topbar m-auto w-[80%] bg-white">
      <Navbar />
      <Search />
      <Jobs />
      <Values />
      <Footer />
    </div>
  );
};

export default App;
