import React, { useEffect } from 'react'
import './Services.css'
import Title from '../Title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faVideoCamera, faFilm, faPodcast, faRadio, faVideo } from '@fortawesome/free-solid-svg-icons';

const Services = () => {  

  return (
    <section className="services">
        <Title text={'The Services'} id={'services'} subTitle={'We can offer you'}/>
        <div className="services-grid">
            <div className='one'>
              <span>Publireportage <FontAwesomeIcon icon={faMicrophone} /></span>
              {/* <span> <FontAwesomeIcon icon={faMicrophone} /></span> */}
            </div>
            <div className='two'>
              {/* <span>Vidéo d'entreprise </span> */}
              {/* <span><FontAwesomeIcon icon={faVideoCamera} /> </span> */}
            </div>
            <div className='three'>
              {/* <span>Couverture corporate event </span> */}
              {/* <span><FontAwesomeIcon icon={faFilm} /> </span> */}
            </div>
            <div className='four'>
              <span>Documentaire </span></div>
            <div className='five'>
              <span>Spot audio et vidéo </span>
              {/* <span><FontAwesomeIcon icon={faVideo} /> </span> */}
            </div>
            <div className='six'>
              <span>Conseils Media et stratégies de com </span></div>
            <div className='seven'>
              {/* <span>Podcast et emissions radio </span> */}
              {/* <span><FontAwesomeIcon icon={faPodcast} /> </span> */}
            </div>
            <div className='eight'>
              <span>Livres audios </span></div>
        </div>
        
    </section>
  )
}

export default Services