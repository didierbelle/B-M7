import React, {useEffect, useState} from 'react'
import './Footer.css';

const Footer = () => {

  const [todayDate, setTodayDate] = useState(new Date(Date.now()).getFullYear());


  useEffect(() => {
    setInterval(() => {
      setTodayDate(new Date(Date.now()).getFullYear());
    }, 60*60*24*7*4);
  })
  

  return (
    <footer>
      <p>B&M7 All rights reserved. Copyright @{todayDate.toString()}</p>
    </footer>
  )
}

export default Footer