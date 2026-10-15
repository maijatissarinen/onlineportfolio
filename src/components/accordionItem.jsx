import React, { useState } from "react";

function AccordionItem({title, periods, bullets}) {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className={`accordion-item${isOpen ? " is-open" : ""}`}>
            <button className="accordion-button" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
                <span>{title}</span>
                <span className="accordion-chevron" aria-hidden="true"></span>
            </button>
            {isOpen && (
                <div className="accordion-content">
                    <div className="accordion-periods">
                        {periods.map((period, index) => (
                            <p key={index}>{period}</p>
                        ))}
                    </div>

                    <ul className="bullets">
                        {bullets.map((bullet, index) => (
                            <li key={index}>{bullet}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
export default AccordionItem;
