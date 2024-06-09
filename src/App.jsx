import React, { useContext, useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Services from './components/Services/Services'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { LanguageContext } from './store/LanguageContext.jsx'

const App = () => {

  //const [languageStored, setLanguageStored] = useState(null);

  const { language, languageData, setLanguage } = useContext(LanguageContext);

  const handleToggleLanguage = () => {
    const newLanguage = language === 'en' ? 'fr' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  }

  useEffect(() => {
    // setLanguageStored(localStorage.getItem('language') ?? 'en');
    const languageToUse = localStorage.getItem('language');
    if(languageToUse)
      setLanguage(languageToUse)
  }, [])
  

  return (
    <>
      <Header languageHandler={handleToggleLanguage} languageData={languageData} language={language}/>
      <hr />
      <main>
        <About languageHandler={handleToggleLanguage} languageData={languageData} />
        <hr />
        <Services />
        <hr />
        <Contact />
        <hr />
        <Footer />
      </main>
    </>
  )
}

export default App