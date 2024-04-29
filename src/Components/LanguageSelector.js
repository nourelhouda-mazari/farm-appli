import React, { useState, useEffect } from "react";
import i18n from '../i18n';

const LanguageSelector = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); 

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'a') {
                changeLanguage('ar');
            } else if (event.key === 'f') {
                changeLanguage('fr');
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);  
        setSelectedLanguage(language);
        localStorage.setItem("lang", language);
    }

    const chooseLanguage = (e) => {
        e.preventDefault();
        changeLanguage(e.target.value);
    }

    return (
        <select value={selectedLanguage} onChange={chooseLanguage}>  
            <option value="fr">Fr</option>
            <option value="ar">Ar</option>
        </select>
    );
};

export default LanguageSelector;
