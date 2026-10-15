import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ProjectCard from "./projectCard";
import "./projectStack.css";

// How far (in px) a card must be dragged before it counts as a swipe.
const SWIPE_DISTANCE = 60;
// How many cards peek out behind the front card.
const VISIBLE_BEHIND = 2;

// Shows projects as a stack of cards: one in front, the next ones peeking out
// behind it. Browse with the arrow buttons, the dots, by swiping/dragging the
// front card, or with the left/right arrow keys.
function ProjectStack({ projects }) {
    const { t } = useTranslation();
    const [current, setCurrent] = useState(0);
    const [dragX, setDragX] = useState(0);
    const drag = useRef(null);
    const count = projects.length;

    const goTo = (index) => setCurrent((index + count) % count);
    const next = () => goTo(current + 1);
    const prev = () => goTo(current - 1);

    // Position of a card relative to the front card: 0 = front, 1 = right
    // behind it, ... and count - 1 = the card that was just swiped away.
    const positionOf = (index) => (index - current + count) % count;

    const onPointerDown = (e) => {
        if (count < 2 || e.button !== 0) return;
        drag.current = { startX: e.clientX, dragging: false };
    };

    const onPointerMove = (e) => {
        if (!drag.current) return;
        const dx = e.clientX - drag.current.startX;
        if (!drag.current.dragging && Math.abs(dx) > 5) {
            drag.current.dragging = true;
            e.currentTarget.setPointerCapture(e.pointerId);
        }
        if (drag.current.dragging) setDragX(dx);
    };

    const onPointerUp = () => {
        if (!drag.current) return;
        if (dragX <= -SWIPE_DISTANCE) next();
        else if (dragX >= SWIPE_DISTANCE) prev();
        drag.current = null;
        setDragX(0);
    };

    // A drag that moved the card should not also open a link on the card.
    const onClickCapture = (e) => {
        if (drag.current?.dragging) e.preventDefault();
    };

    const onKeyDown = (e) => {
        if (e.key === "ArrowRight") next();
        if (e.key === "ArrowLeft") prev();
    };

    if (count === 0) return null;

    return (
        <div
            className="project-stack"
            role="region"
            aria-roledescription="carousel"
            aria-label={t("Pro.otsikko")}
            onKeyDown={onKeyDown}
        >
            <div className="project-stack-cards">
                {projects.map((project, index) => {
                    const position = positionOf(index);
                    const isFront = position === 0;
                    const isLeaving = count > VISIBLE_BEHIND + 1 && position === count - 1;
                    const depth = Math.min(position, VISIBLE_BEHIND + 1);
                    const isHidden = position > VISIBLE_BEHIND && !isLeaving;
                    const dragging = isFront && dragX !== 0;

                    return (
                        <div
                            key={project.key}
                            className={`project-stack-slot${isFront ? " is-front" : ""}${isLeaving ? " is-leaving" : ""}${isHidden ? " is-hidden" : ""}${dragging ? " is-dragging" : ""}`}
                            style={{
                                "--depth": depth,
                                "--drag": isFront ? dragX : 0,
                                zIndex: count - position,
                            }}
                            aria-hidden={!isFront}
                            inert={!isFront}
                            aria-roledescription="slide"
                            aria-label={`${index + 1} / ${count}`}
                            onPointerDown={isFront ? onPointerDown : undefined}
                            onPointerMove={isFront ? onPointerMove : undefined}
                            onPointerUp={isFront ? onPointerUp : undefined}
                            onPointerCancel={isFront ? onPointerUp : undefined}
                            onClickCapture={isFront ? onClickCapture : undefined}
                        >
                            <ProjectCard {...project} />
                        </div>
                    );
                })}
            </div>

            {count > 1 && (
                <div className="project-stack-controls">
                    <button type="button" className="project-stack-arrow" onClick={prev} aria-label={t("Pro.prev")}>
                        ←
                    </button>
                    <div className="project-stack-dots">
                        {projects.map((project, index) => (
                            <button
                                type="button"
                                key={project.key}
                                className={`project-stack-dot${index === current ? " is-active" : ""}`}
                                onClick={() => goTo(index)}
                                aria-label={`${index + 1} / ${count}: ${project.title}`}
                                aria-current={index === current}
                            />
                        ))}
                    </div>
                    <button type="button" className="project-stack-arrow" onClick={next} aria-label={t("Pro.next")}>
                        →
                    </button>
                </div>
            )}

            <p className="project-stack-status" aria-live="polite">
                {current + 1} / {count}
            </p>
        </div>
    );
}

export default ProjectStack;
