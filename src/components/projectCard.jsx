import React from "react";

function ProjectCard({title, description, links}) {
    return(
        <li className="projects-card">
            <h4>{title}</h4>
            <p>{description}</p>
            <p className="links">
                {links.map((link) => (
                    <a key={link.url} href={link.url}>{link.label}</a>
                ))}
            </p>
        </li>
    );
};
export default ProjectCard;
