import React from 'react'
import Title from './../Title/Title.jsx'
import './Contact.css'
import Team from '../Team/Team.jsx'

const Contact = () => {
  return (
    <section className='contact'>
      <aside className="second-contact-aside">
          <Team />
      </aside>
      <aside className="first-contact-aside">
          <Title text={'Our Contact'} id={'contact_us'} subTitle={'and social medias'}/>
          <ul className='contact-list'>
              <li>Address : Rue de la paix</li>
              <li>Phone : +246 2356 6 87 64 62</li>
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