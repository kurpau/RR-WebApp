import React from "react";

const Welcome = (props) => {
    return (
        <div className="welcome">
            <h1>Welcome to <a href="https://www.reddit.com/r/bodyweightfitness/" target="_blank" rel="noopener noreferrer">r/bodyweightfitness</a> <br />
            recommended routine Web App</h1>
            <button onClick={props.onShowInstructions}>How to use</button>
        </div>
    );
}

export default Welcome;