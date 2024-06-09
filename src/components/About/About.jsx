import React from 'react'
import './About.css'
import Title from '../Title/Title'
import video from '../../assets/vid.mp4'
import thumbnail from '../../assets/thumbnail.jpg'
import FloatingIcon from '../FloatingIcon/FloatingIcon'

const About = ({languageHandler, languageData}) => {
  return (
    <section className='about'>
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