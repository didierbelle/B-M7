import React from 'react'
import Title from '../Title/Title';
import './Team.css'
import teamImg1 from './../../assets/ex_bg.jpg'
import teamImg2 from './../../assets/team1.jpg'


const Team = ({languageData}) => {
  
  return (
    <>
        <Title text={languageData.titleTeam} id={'contact_us'} subTitle={languageData.subTitleTeam}/>
        <div className='team-images'>
          <div className="img1">
            <img src={teamImg1} alt="" />
            <p>Directeur en chef</p>
          </div>
            {/* <hr /> */}
          <div className="img2">
            <img src={teamImg2} alt="" />
            <p>Adjoint Manager</p>
          </div>
        </div>
    </>
  )
}

export default Team