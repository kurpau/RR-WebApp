import React, { Fragment } from "react";

const Card = (props) => {
    return (
        <Fragment>
            <h2>{props.title}</h2>
            <div className="container">
                {props.children}
                <video autoPlay loop>
                    <source src={props['path']} />
                </video>
            </div>
            <div className="meta">
                <p>{props.progression}</p>
                <p>Do {props.snr}</p>
            </div>
            <ul id="hints">
                {props.keypoints}
            </ul>
        </Fragment>
    );
};

export default Card;