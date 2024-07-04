import React, { useEffect } from 'react'
import './Services.css'
import Title from '../Title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faVideoCamera, faFilm, faPodcast, faRadio, faVideo } from '@fortawesome/free-solid-svg-icons';

import { useInView } from 'react-intersection-observer';

const Services = ({languageData}) => {  

  const {ref, inView} = useInView({
    threshold: 0.15
  })

  return (
    <section className={`services ${inView ? 'animate-section' : ''}`} ref={ref}>
        <Title text={languageData.titleServices} id={'services'} subTitle={languageData.subTitleServices}/>
        <div className="services-grid">
            <div className='one'>
              <span>Publireportage <FontAwesomeIcon icon={faMicrophone} /></span>
              {/* <span> <FontAwesomeIcon icon={faMicrophone} /></span> */}
            </div>
            <div className='two'>
              <span>Deux</span>
              {/* <span>Vidéo d'entreprise </span> */}
              {/* <span><FontAwesomeIcon icon={faVideoCamera} /> </span> */}
            </div>
            <div className='three'>
              <span>Trois</span>
              {/* <span>Couverture corporate event </span> */}
              {/* <span><FontAwesomeIcon icon={faFilm} /> </span> */}
            </div>
            <div className='four'>
              <span>4 Conseils Media et stratégies de com</span></div>
            <div className='five'>
              <span>5 Spot audio et vidéo </span>
              {/* <span><FontAwesomeIcon icon={faVideo} /> </span> */}
            </div>
            <div className='six'>
              <span>6 Documentaire</span></div>
            <div className='seven'>
              <span>7</span>
              {/* <span>Podcast et emissions radio </span> */}
              {/* <span><FontAwesomeIcon icon={faPodcast} /> </span> */}
            </div>
            <div className='eight'>
              <span>8 Livres audios </span></div>
        </div>
        
    </section>
  )
}

export default Services