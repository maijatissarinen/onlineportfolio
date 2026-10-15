import React, { useState } from "react";

function AccordionItem({title, periods, bullets}) {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="accordion-item">
            <button className="accordion-button" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
                {title}
            </button>
            {isOpen && (
                <div className="accordion-content">
                    {periods.map((period, index) => (
                        <p key={index}>{period}</p>
                    ))}

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
