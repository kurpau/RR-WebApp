import React from "react";
import Modal from "./Modal/Modal";

const Instructions = (props) => {
    return (
        <Modal onClose={props.onClose}>
            <h3>Instructions for the workout</h3>
            <ol>
                <li>For pairs</li>
                    <ul>
                        <li>do set of the first exercise</li>
                        <li>rest for 90 seconds</li>
                        <li>dot set of the second exercise</li>
                        <li>rest for 90 seconds</li>
                        <li>repeat</li>
                    </ul>
                <li>For the triplet</li>
                    <ul>
                        <li>everything is the same except rest is 60 seconds and there are 3 exercises</li>
                    </ul>
            </ol>
            <h3>Instructions for the app</h3>
            <ol>
                <li>To cycle progressions tap on either side of the picture</li>
                <li>"Do 3x5-8" means do 3 sets of 5-8 reps</li>
            </ol>
            <div className="instrLayout">
                <a href="https://www.reddit.com/r/bodyweightfitness/wiki/kb/recommended_routine/#wiki_welcome_to_the_recommended_routine">More info</a>
                <button onClick={props.onClose}>Back to work</button>
            </div>
        </Modal>
    );
}

export default Instructions;