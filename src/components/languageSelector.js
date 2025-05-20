import React, {useState} from "react";
import i18n from '../i18n';

const LanguageSelector = () => {
    
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.

    const chooseLanguage = (e) => {
        e.preventDefault();
        i18n.changeLanguage(e.target.value);   // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
        setSelectedLanguage(e.target.value);
    }

    return (
        <div className='selectLang'>  
            <button value="fi" onClick={chooseLanguage}>suomi</button>
            <button value="en" onClick={chooseLanguage}>English</button>
        </div>
    );
};

export default LanguageSelector;