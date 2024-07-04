import React from 'react'
import './FloatingIcon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft as  faDotCircle } from '@fortawesome/free-regular-svg-icons';

import { useInView } from "react-intersection-observer";


const FloatingIcon = () => {

    const {ref, inView} = useInView({
        threshold : 0.05
    })

  return (
    <div>
        <span className={`floating-icon ${inView ? "animate-icon" : '' }`} ref={ref}><FontAwesomeIcon icon={faDotCircle} /></span> 
    </div>
  )
}

export default FloatingIcon