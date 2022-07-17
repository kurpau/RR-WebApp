import React, { Fragment } from "react";

const Card = (props) => {
    return (
        <div className="card">
            <h2>{props.title}</h2>
            <div className="container">
                {props.children}
                <img className="image" 
                    src={props['path']} 
                    alt={props.alt} 
                />
            </div>
            <ul>
                {props.keypoints}
            </ul>
        </div>
    );
};

export default Card;