import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({languageHandler, languageData, language}) => {

  const [dark, setDark] = useState(false);


  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 750 ? setDark(true) : setDark(false);
    });
  }, [])

  

  const handleTheme = (event) => {
    event.preventDefault();
    alert('Theme handled');
  }

  const handleLanguage = (event) => {
    event.preventDefault();
    languageHandler();
  }

  return (
    <nav className={dark ? 'dark' : ''}>
        <p><a href="#">
          {/* <img src={Logo} alt="" /> */}
          B&M7
          </a>
        </p>
        <ul>
            <li><a href="#about"> {languageData.navLinkAbout} </a> </li>
            <li><a href="#services" className='link-selected'> Services </a> </li>
            <li><a href="#contact_us"> {languageData.navLinkContact} </a> </li>
            <li id="select-language">
                {language}
                
                <div id="languages">
                    <a href='#' onClick={handleLanguage}>FR / EN</a>
                </div>
            </li>
        </ul>
        <div id='select-theme'>
          <span >{languageData.navTheme}</span>
          <p id="theme">
              <a href='#' onClick={handleTheme}>
                <FontAwesomeIcon icon={faSun} /> / <FontAwesomeIcon icon={faMoon} /> 
              </a>
          </p>  
        </div>
    </nav>
  )
}

export default Navbar