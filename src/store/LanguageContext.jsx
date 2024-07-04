import React, { createContext, useState, useEffect } from "react";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    const [languageData, setLanguageData] = useState({});

    useEffect(() => {
      fetchLanguageData();
    }, []);

    useEffect(() => {
      fetchLanguageData();
    }, [language]);
    

    const fetchLanguageData = () => {
        const dataUrl = `./locales/${language}.json` ?? `/locales/${language}.json`;


        fetch(dataUrl)
            .then((response) => response.json())
            .then((data) => setLanguageData(data))
            .catch((error) => console.error('Error fetching language data :', error));
    };
    

    return (
        <LanguageContext.Provider value={{language, setLanguage, languageData}}>
            { children }
        </LanguageContext.Provider>
    );
};

export {LanguageContext, LanguageProvider};