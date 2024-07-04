import React from 'react'
import Title from './../Title/Title.jsx'
import './Contact.css'
import Team from '../Team/Team.jsx'

import { useInView } from 'react-intersection-observer'

const Contact = ({languageData}) => {

  const {ref, inView} = useInView({
    threshold: 0.15
  })

  return (
    <section className={`contact ${inView ? 'animate-section' : ''}`} ref={ref}>
      <aside className="second-contact-aside">
          <Team languageData={languageData}/>
      </aside>
      <aside className="first-contact-aside">
          <Title text={languageData.titleContact} id={'contact_us'} subTitle={languageData.subTitleContact}/>
          <ul className='contact-list'>
              <li>{languageData.addressContactLabel} : Rue de la paix</li>
              <li>{languageData.phoneContactLabel} : +246 2356 6 87 64 62</li>
              <br />
              <li>X : <a href="#" className='contact-link'>X.com</a></li>
              <li>Facebook : <a href="#" className='contact-link'>Facebook.com</a></li>
              <li>Mail : <a href="nyambedira@gmail.com" className='contact-link'> address@address.com </a></li>
          </ul>
      </aside>
    </section>
  )
}

export default Contact