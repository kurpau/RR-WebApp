import React, { Fragment } from "react";

const Card = (props) => {
    return (
        <Fragment>
            <h2>{props.title}</h2>
            <div className="container">
                {props.children}
                <img src={props['path']} alt={props.alt} />
            </div>
                <p>{props.progression}</p>
            <ul>
                {props.keypoints}
            </ul>
        </Fragment>
    );
};

export default Card;