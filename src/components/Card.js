import React from "react";

const Card = (props) => {
    return (
        <div>
            <img className="image" src={props.img} alt={props.alt}></img>
            <ul>
                <li>{props.hints}</li>
            </ul>
        </div>
    );
};

export default Card;