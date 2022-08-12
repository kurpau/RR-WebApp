import React, { Fragment } from "react";

const Card = (props) => {
    return (
        <Fragment>
            <h2>{props.title}</h2>
            <div className="container">
                {props.children}
                <img src={props['path']} alt={props.alt} />
            </div>
            <div className="meta">
                <p>{props.progression}</p>
                <p>Do {props.snr}</p>
            </div>
            <ul>
                {props.keypoints}
            </ul>
        </Fragment>
    );
};

export default Card;