import React from "react";

const Card = (props) => {
    return (
        <div >
            <img className="image" src={props.img} alt={props.alt} width="200" height="200"></img>
            {props.children}
            <ul>
                <li>{props.hints}</li>
            </ul>
        </div>
    );
};

export default Card;