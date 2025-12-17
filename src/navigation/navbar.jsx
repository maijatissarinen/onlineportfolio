
import React from 'react';
import './navbar.css';
import LanguageSelector from '../components/languageSelector';
import { useTranslation } from 'react-i18next';

function Navbar () {
    const {t} = useTranslation();
    return (
        <nav className="desktop-navbar">
            <ul className='desktop-nav-links'>
                <li><a href='#about'>{t("Nav.about")}</a></li>
                <li><a href='#work'>{t("Nav.work")}</a></li>
                <li><a href='#edu'>{t("Nav.edu")}</a></li>
            </ul>
            <div className='desktop-lang'>
                < LanguageSelector />
            </div>
        </nav>
    )
}

export default Navbar;