import React from "react";
import Modal from "./Modal/Modal";

const Instructions = (props) => {
    return (
        <Modal onClose={props.onClose}>
            <ul>
                <li>There are nine exercises.</li>
                <li>These exercises are to be done in pairs and triplets to save time.</li>
                <li>
                    Pairing two exercises means doing a set of the first exercise, resting 90 seconds, 
                    then doing a set of the second exercise, resting 90 seconds, and repeating until you've done 3 sets of that pair.
                </li>
                <li>
                    For the triplet, you do a set of the first exercise, rest 60 seconds, do a set of the second exercise,
                    rest 60 seconds, do a set of the third exercise, rest 60 seconds, and repeating until you've done 3 sets of that triplet.
                </li>
            </ul>
            <div className="instrLayout">
                <a href="https://www.reddit.com/r/bodyweightfitness/wiki/kb/recommended_routine/#wiki_welcome_to_the_recommended_routine">More info</a>
                <button onClick={props.onClose}>Back to work</button>
            </div>
        </Modal>
    );
}

export default Instructions;