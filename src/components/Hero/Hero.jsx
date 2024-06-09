import React from 'react'
import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faHandshake } from '@fortawesome/free-solid-svg-icons'


const Hero = ({languageHandler, languageData}) => {

  const showContact = (event) => {
    event.preventDefault();
    alert('Clicked');
  }

  return (
    <>
    <section>
        <div id="hero-banner">
            <h1>{languageData.heroText1}<strong className=''>{languageData.heroTextSpecial}</strong>{languageData.heroText2}</h1>
            <button onClick={showContact}>{languageData.heroButtonText} <FontAwesomeIcon icon={faHandshake} /> </button>
        </div>
    </section>

    <div id="find_more">
        <p><a href="#about">
          <FontAwesomeIcon icon={faArrowDown} alt="see more images" />
        </a></p>
    </div>
    </>
  )
}

export default Hero