import React from 'react';
import './homePage.css'
import { useTranslation } from 'react-i18next';

function HomePage() {
    const {t} = useTranslation();
    return (
        <section id="hero">
                <div class="hero-container">
                    <h3>{t("Hero.otsikko1")}</h3>
                    <h1>{t("Hero.otsikko2")}</h1>
                    <h3>{t("Hero.otsikko3")}</h3>
                </div>
            </section>
    );
}

export default HomePage;