import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageSelector from '../components/languageSelector';

function Navbar () {
    const {t} = useTranslation();
    return (
        <nav classNam="navbar">
            < LanguageSelector />
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;