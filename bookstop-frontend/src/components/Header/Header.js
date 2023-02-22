import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-black'>
                <h2 className='header-title'>Search Book Of Your Need.</h2><br />
                <p className='header-text'>Here you can find your required book and can contact to your seniors</p>
                <SearchForm />
            </div>
            
        </header>
    </div>
  )
}

export default Header