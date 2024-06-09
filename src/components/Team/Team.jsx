import React from 'react'
import Title from '../Title/Title';
import './Team.css'
import teamImg1 from './../../assets/ex_bg.jpg'
import teamImg2 from './../../assets/team1.jpg'

const Team = () => {
  return (
    <>
        <Title text={'The Team'} id={'contact_us'} subTitle={'Working with you'}/>
        <div className='team-images'>
          <div className="img1">
            <img src={teamImg1} alt="" />
            <p>Ben Holl : Manager chef</p>
          </div>
            <hr />
          <div className="img2">
            <img src={teamImg2} alt="" />
            <p>Marcy Holl : Assistant Manager</p>
          </div>
        </div>
    </>
  )
}

export default Team