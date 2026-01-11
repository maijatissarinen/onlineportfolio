import React, { useState } from "react";

function AccordionItem({title, time, desc}) {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="accordion-item">
            <button className="accordion-button" onClick={() => setIsOpen(!isOpen)}>
                {title}
            </button>
            {isOpen && (
                <div className="accordion-content">
                    {time.includes('\n')
                        ? time.split('\n').map((line, index) => (
                        <p key={index}>{line}</p>
                    ))
                    : <p>{time}</p>}
                    <p>{desc}</p>
                </div>
            )}
        </div>
    );
};
export default AccordionItem;