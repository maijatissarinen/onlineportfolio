import React, { useState } from "react";

function AccordionItem({title, time, desc1, desc2, desc3}) {
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

                    <ul className="bullets">
                        <li>{desc1}</li>
                        <li>{desc2}</li>
                        <li>{desc3}</li>
                    </ul>
                </div>
            )}
        </div>
    );
};
export default AccordionItem;