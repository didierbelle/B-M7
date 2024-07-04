import React from 'react'
import './About.css'
import Title from '../Title/Title'
import video from '../../assets/vid.mp4'
import thumbnail from '../../assets/thumbnail.jpg'
import FloatingIcon from '../FloatingIcon/FloatingIcon'

import { useInView } from "react-intersection-observer";


const About = ({languageHandler, languageData}) => {

  const {ref, inView} = useInView({
    threshold : 0.05
  })

  return (
    <section className={`about ${inView ? 'animate-section' : ''}`} ref={ref}>
      <aside>
          <video src={video} poster={thumbnail} controls className='about-video'></video>
      </aside>
      <aside>
          <Title text={languageData.titleAbout} id={'about'} subTitle={languageData.subTitleAbout}/>
          <FloatingIcon />
          <div>
            <p>{languageData.aboutp1}</p>
            <p>{languageData.aboutp2}</p>
          </div>
      </aside>
    </section>
  )
}

export default About