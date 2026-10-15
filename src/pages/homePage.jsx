import React from 'react';
import AccordionItem from '../components/accordionItem';
import ProjectStack from '../components/projectStack';
import { projects } from '../data/projects';
import { jobs } from '../data/work';
import { localize } from '../data/localize';
import './homePage.css'
import './haitari.css'
import { useTranslation } from 'react-i18next';

function HomePage() {
    const {t, i18n} = useTranslation();
    return (
        <div className='main'>

            <section id="hero">
                <div className="hero-container">
                    {/*<img id="heroimage" src='./imgs/Cv kuva 2025.png' alt="kuva"></img>*/}
                    <div className="herotext">
                        <h1>{t("Hero.otsikko2")}</h1>
                        <h3>{t("Hero.otsikko3")}</h3>
                        <h3>{t("Hero.otsikko4")}</h3>
                    </div>
                </div>
            </section>

            <section id="about">
                <div className="about-container">
                    <h1>{t("About.aboutOtsikko")}</h1>
                    <article className="about-desc">
                        <p>{t("About.about1")}</p>
                        <p>{t("About.about2")}</p>
                        <p>{t("About.about4")}<strong>{t("About.about5")}</strong>{t("About.about6")}</p>
                        
                    </article>
                    {/* <div className="about-skills">
                        <p>{t("About.skills")}</p>
                        <h4>{t("About.code")}</h4>
                        <div className="tech">
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
                        <div className="tech">
                            <li>PowerBI</li>
                            <li>Microsoft O365</li>
                            <li>GitHub</li>
                        </div>
                    </div> */}
                </div>
            </section>

            <section id="projects">
                <h1>{t("Pro.otsikko")}</h1>
                <p>{t("Pro.desc")}</p>
                <ProjectStack
                    projects={projects.filter((project) => project.show).map((project) => ({
                        key: project.title.en,
                        title: localize(project.title, i18n.language),
                        description: localize(project.description, i18n.language),
                        links: project.links,
                    }))} />
            </section>    

            <section id="work">
                <h1>{t("Work.otsikko")}</h1>
                <div className="work-content">
                    {jobs.map((job, index) => (
                        <AccordionItem
                            key={index}
                            title={localize(job.title, i18n.language)}
                            periods={job.periods.map((period) => `${period.from} - ${period.to ?? t("Work.present")}`)}
                            bullets={localize(job.bullets, i18n.language)} />
                    ))}
                </div>
            </section>

            <section id="edu">
                <h1>{t("Edu.otsikko")}</h1>
                <div className="edu-container">
                    <div className="edu-line"></div>
                    <div className="edu-content">
                        <div className="edu-desc">
                            <div className="year">
                                <p><strong>{t("Edu.now.time")}</strong></p>
                            </div>
                            <div className="desc">
                                <p><strong>{t("Edu.now.title")}</strong></p>
                                <article className="masters">
                                    <p>{t("Edu.now.major")}</p>
                                    <p>{t("Edu.now.program")}</p>
                                    <p>{t("Edu.now.school")}</p>
                                    <p>{t("Edu.now.uni")}</p>
                                </article>
                            </div>
                        </div>
                        <div className="edu-desc">
                            <div className="year">
                                <p><strong>{t("Edu.bachelor.time")}</strong></p>
                            </div>
                            <div className="desc">
                                <p><strong>{t("Edu.bachelor.title")}</strong></p>
                                <article className="masters">
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