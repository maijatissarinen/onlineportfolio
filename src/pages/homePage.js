import React from 'react';
import AccordionItem from '../components/accordionItem';
import './homePage.css'
import './haitari.css'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function HomePage() {
    const {t} = useTranslation();
    return (
        <div class="body">
            <section id="hero">
                <div class="hero-container">
                    <h3>{t("Hero.otsikko1")}</h3>
                    <h1>{t("Hero.otsikko2")}</h1>
                    <h3>{t("Hero.otsikko3")}</h3>
                </div>
            </section>
            <section id="about">
                <div class="about-container">
                    <h1>{t("About.aboutOtsikko")}</h1>
                    <article>
                        <p>{t("About.about1")}</p>
                        <p>{t("About.about2")}</p>
                        <p>{t("About.about3")}</p>
                        <p>{t("About.about4")}</p>
                    </article>
                </div>
            </section>

            <section id="work">
                <h1>{t("Work.otsikko")}</h1>
                <div class="work-content">
                    {/* Varex button */}
                    <AccordionItem
                        title={t("Work.varex.otsikko")}
                        time={t("Work.varex.time")}
                        desc={t("Work.varex.desc")} />    
                    {/* Aalto Junior button*/}
                    <AccordionItem 
                        title={t("Work.junior.otsikko")}
                        time={t("Work.junior.time")}
                        desc={t("Work.junior.desc")} />
                    {/* GE button */}
                    <AccordionItem 
                        title={t("Work.ge.otsikko")}
                        time={t("Work.ge.time")}
                        desc={t("Work.ge.desc")} />

                    {/* Lidl button */}
                    <AccordionItem 
                        title={t("Work.lidl.otsikko")}
                        time={t("Work.lidl.time")}
                        desc={t("Work.lidl.desc")} />
                </div>
                
            </section>
        </div>
    );
}

export default HomePage;