import React from "react";

function ProjectCard({title, description, links}) {
    return(
        <article className="project-card">
            <h4>{title}</h4>
            <p>{description}</p>
            <p className="links">
                {links.map((link) => (
                    <a key={link.url} href={link.url}>{link.label}</a>
                ))}
            </p>
        </article>
    );
};
export default ProjectCard;
