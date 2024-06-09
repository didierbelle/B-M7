import React from 'react';
import './Header.css'
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';

const Header = ({languageHandler, languageData, language}) => {
  return (
    <header>
        <Navbar languageHandler={languageHandler} languageData={languageData} language={language} />
        <hr />
        <Hero languageHandler={languageHandler} languageData={languageData}/>
    </header>
  )
}

export default Header