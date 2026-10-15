import React from "react";

// Shows text where parts wrapped in **double asterisks** are bold.
function RichText({ text }) {
    return text.split("**").map((part, index) =>
        index % 2 === 1 ? <strong key={index}>{part}</strong> : part
    );
}

export default RichText;
