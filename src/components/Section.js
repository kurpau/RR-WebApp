import React from "react";

const Section = (props) => {
    return (
        <div className="section">
            <h1>{props.title}</h1>
            {props.children}
        </div>
    );
};

export default Section;