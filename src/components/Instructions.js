import React from "react";
import Modal from "./Modal/Modal";

const Instructions = (props) => {
    return (
        <Modal onClose={props.onClose}>
            <h3>Workout Instructions</h3>
            <ol>
                <li>For exercise pairs:</li>
                <ul>
                    <li>Complete a set of the first exercise.</li>
                    <li>Take a 90-second break.</li>
                    <li>Perform a set of the second exercise.</li>
                    <li>Rest for another 90 seconds.</li>
                    <li>Repeat this process.</li>
                </ul>
                <li>For the exercise triplet:</li>
                <ul>
                    <li>Follow the same procedure as for pairs, but reduce the rest time to 60 seconds and include a third exercise.</li>
                </ul>
            </ol>
            <h3>App Usage Instructions</h3>
            <ol>
                <li>To switch between exercise progressions, tap either side of the video display.</li>
                <li>When you see "Do 3x5-8," it means to complete 3 sets with 5 to 8 repetitions per set.</li>
            </ol>
            <div className="instrLayout">
                <a href="https://www.reddit.com/r/bodyweightfitness/wiki/kb/recommended_routine/#wiki_welcome_to_the_recommended_routine" target="_blank" rel="noopener noreferrer">More info</a>
                <button onClick={props.onClose}>Back to work</button>
            </div>
        </Modal>
    );
}

export default Instructions;