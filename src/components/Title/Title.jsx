import React from 'react'
import './Title.css'

const Title = ({text, id, subTitle='Fuch'}) => {
  return (
    <div className='title'>
        <p id={id}>{text}</p>
        <h2>{subTitle}</h2>
    </div>
  )
}

export default Title