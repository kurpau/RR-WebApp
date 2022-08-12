import React, { useState } from "react";
import Instructions from "./Instructions";

const Welcome = (props) => {
    

    return (
        <div className="welcome">
            <h1>Welcome to <a href="https://www.reddit.com/r/bodyweightfitness/">r/bodyweightfitness</a> <br />
            recommended routine Web App</h1>
            <button onClick={props.onShowInstructions}>How to use</button>
        </div>
    );
}

export default Welcome;