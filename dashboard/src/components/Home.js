import React from "react";

import Dashboard from "./Dashboard";
// Correct:
import TopBar from './TopBar';


const Home = () => {
  return (
    <>
      <TopBar/>
      <Dashboard />
    </>
  );
};

export default Home;