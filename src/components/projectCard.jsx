import React from "react";

function ProjectCard({title, description, links, image, imageFit}) {
    return(
        <article className={`project-card${image ? " has-image" : ""}`}>
            {image && (
                <div className={`project-card-media${imageFit === "contain" ? " is-contain" : ""}`}>
                    <img src={image} alt="" draggable="false" />
                </div>
            )}
            <div className="project-card-body">
                <h4>{title}</h4>
                <p>{description}</p>
                <p className="links">
                    {links.map((link) => (
                        <a key={link.url} href={link.url}>{link.label}</a>
                    ))}
                </p>
            </div>
        </article>
    );
};
export default ProjectCard;
