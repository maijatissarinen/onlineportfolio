import React from 'react';
import AccordionItem from '../components/accordionItem';
import ProjectStack from '../components/projectStack';
import { projects } from '../data/projects';
import { jobs } from '../data/work';
import { localize } from '../data/localize';
import { hero, about, skills } from '../data/about';
import { education } from '../data/education';
import RichText from '../components/richText';
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
                        <h1>{localize(hero.greeting, i18n.language)}</h1>
                        {localize(hero.lines, i18n.language).map((line, index) => (
                            <h3 key={index}>{line}</h3>
                        ))}
                    </div>
                </div>
            </section>

            <section id="about">
                <div className="about-container">
                    <h1>{localize(about.heading, i18n.language)}</h1>
                    <article className="about-desc">
                        {localize(about.paragraphs, i18n.language).map((paragraph, index) => (
                            <p key={index}><RichText text={paragraph} /></p>
                        ))}
                    </article>
                    {skills.show && (
                        <div className="about-skills">
                            <p>{localize(skills.intro, i18n.language)}</p>
                            {skills.groups.map((group, index) => (
                                <React.Fragment key={index}>
                                    <h4>{localize(group.title, i18n.language)}</h4>
                                    <ul className="tech">
                                        {group.items.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </React.Fragment>
                            ))}
                        </div>
                    )}
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
                        // Links to your own files ("projects/report.pdf") get the site's address in front.
                        links: project.links.map((link) => (
                            /^(https?:|mailto:)/.test(link.url) ? link : { ...link, url: `${import.meta.env.BASE_URL}${link.url}` }
                        )),
                        image: project.image && `${import.meta.env.BASE_URL}projects/${project.image}`,
                        imageFit: project.imageFit,
                    }))} />
            </section>    

            <section id="work">
                <h1>{t("Work.otsikko")}</h1>
                <div className="work-content">
                    {jobs.filter((job) => job.show !== false).map((job, index) => (
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
                <ol className="timeline">
                    {education.map((degree, index) => (
                        <li className={`timeline-item${degree.year ? "" : " is-current"}`} key={index}>
                            <span className="timeline-year">{degree.year || t("Edu.now")}</span>
                            <span className="timeline-marker" aria-hidden="true"></span>
                            <div className="timeline-content">
                                <h4>{localize(degree.title, i18n.language)}</h4>
                                {localize(degree.details, i18n.language).map((line, lineIndex) => (
                                    <p key={lineIndex}>{line}</p>
                                ))}
                            </div>
                        </li>
                    ))}
                </ol>
            </section>
      
        </div>
    );
}

export default HomePage;