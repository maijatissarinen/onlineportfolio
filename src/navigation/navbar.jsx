
import {Link} from 'react-router-dom';
import React from 'react';
import './navbar.css';
import LanguageSelector from '../components/languageSelector';
import { useTransition } from 'react-i18next';

function Navbar () {
    return (
        <nav className="navbar">
            < LanguageSelector />
        </nav>
    )
}

export default Navbar;