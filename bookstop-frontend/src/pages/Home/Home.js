import React from "react";
import Header from "../../components/Header/Header";
// import SearchForm from "../../components/SearchForm/SearchForm";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
    
  );
};

export default Home;
