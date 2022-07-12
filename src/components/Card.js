import React, { useState } from "react";

const Card = (props) => {
    console.log(props.path.img)
    return (
        <div >
            <h2>{props.title}</h2>
            <img className="image" 
                src={props['path']} 
                alt={props.alt} 
            />
            <ul>
                {props.keypoints}
            </ul>
        </div>
    );
};

export default Card;