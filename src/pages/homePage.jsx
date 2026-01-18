import React from 'react';
import AccordionItem from '../components/accordionItem';
import './homePage.css'
import './haitari.css'
import { useTranslation } from 'react-i18next';

function HomePage() {
    const {t} = useTranslation();
    return (
        <div className='main'>

            <section id="hero">
                <div class="hero-container">
                    {/*<img id="heroimage" src='./imgs/Cv kuva 2025.png' alt="kuva"></img>*/}
                    <div class="herotext">
                        <h1>{t("Hero.otsikko2")}</h1>
                        <h3>{t("Hero.otsikko3")}</h3>
                        <h3>{t("Hero.otsikko4")}</h3>
                    </div>
                </div>
            </section>

            <section id="about">
                <div class="about-container">
                    <h1>{t("About.aboutOtsikko")}</h1>
                    <article class="about-desc">
                        <p>{t("About.about1")}</p>
                        <p>{t("About.about2")}</p>
                        <p>{t("About.about4")}<strong>{t("About.about5")}</strong>{t("About.about6")}</p>
                        
                    </article>
                    <div class="about-skills">
                        <p>{t("About.skills")}</p>
                        <h4>{t("About.code")}</h4>
                        <div class="tech">
                            <li>Python</li>
                            <li>Numpy</li>
                            <li>pandas</li>
                            <li>Scikit-learn</li>
                            <li>seaborn</li>
                            <li>PyTorch</li>
                            <li>R</li>
                            <li>SQL</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                        </div>
                        <h4>{t("About.tools")}</h4>
                        <div class="tech">
                            <li>PowerBI</li>
                            <li>Microsoft O365</li>
                            <li>GitHub</li>
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects">
                <h1>{t("Pro.otsikko")}</h1>
                <p>{t("Pro.desc")}</p>
                <ul class="projects-container">
                    <li class="projects-card" >
                        <h4>{t("Pro.info.title")}</h4>
                        <p>
                            <li>{t("Pro.info.desc1")}</li>
                        </p>
                        <div class="tech">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Data visualization</li>
                        </div>
                        <p class="links">
                            <a href='https://maijatissarinen.github.io/explorativeinfovis'>Live demo</a>
                            <a href='https://github.com/maijatissarinen/explorativeinfovis'>Github</a>
                        </p>
                    </li>
                    <li class="projects-card">
                        <h4>{t("Pro.powerbi.title")}</h4>
                        <p class="list">
                            <li>{t("Pro.powerbi.desc1")}</li>
                        </p>
                        <div class="tech">
                            <li>PowerBI</li>
                            <li>Data visualization</li>
                        </div>
                        <p class="links">
                            <a href='https://app.powerbi.com/reportEmbed?reportId=c0a20728-9d27-4ae5-b003-ae456788baf2&autoAuth=true&ctid=ae1a7724-4041-4462-a6dc-538cb199707e'>Dashboard</a>
                            <a href='https://github.com/maijatissarinen/hospitalwaittime'>Github</a>
                        </p>
                    </li>
                    <li class="projects-card">
                        <h4>{t("Pro.digi.title")}</h4>
                        <p class="list">
                            <li>{t("Pro.digi.desc1")}</li>
                        </p>
                        <div class="tech">
                            <li>Python</li>
                            <li>NLP</li>
                        </div>
                        <p class="links">
                            <a href='https://github.com/maijatissarinen/digihealth_project'>Github</a>
                        </p>
                    </li>
                </ul>
            </section>    

            <section id="work">
                <h1>{t("Work.otsikko")}</h1>
                <div class="work-content">
                    {/* Aalto Junior button2*/}
                    <AccordionItem 
                        title={t("Work.junior.otsikko")}
                        time={t("Work.junior.time2")}
                        desc={t("Work.junior.desc2")} />
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

            <section id="edu">
                <h1>{t("Edu.otsikko")}</h1>
                <div class="edu-container">
                    <div class="edu-line"></div>
                    <div class="edu-content">
                        <div class="edu-desc">
                            <div class="year">
                                <p><strong>{t("Edu.now.time")}</strong></p>
                            </div>
                            <div class="desc">
                                <p><strong>{t("Edu.now.title")}</strong></p>
                                <article class="masters">
                                    <p>{t("Edu.now.major")}</p>
                                    <p>{t("Edu.now.program")}</p>
                                    <p>{t("Edu.now.school")}</p>
                                    <p>{t("Edu.now.uni")}</p>
                                </article>
                            </div>
                        </div>
                        <div class="edu-desc">
                            <div class="year">
                                <p><strong>{t("Edu.bachelor.time")}</strong></p>
                            </div>
                            <div class="desc">
                                <p><strong>{t("Edu.bachelor.title")}</strong></p>
                                <article class="masters">
                                    <p>{t("Edu.bachelor.major")}</p>
                                    <p>{t("Edu.bachelor.school")}</p>
                                    <p>{t("Edu.bachelor.uni")}</p>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
      
        </div>
    );
}

export default HomePage;