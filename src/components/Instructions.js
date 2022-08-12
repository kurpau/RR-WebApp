import React from "react";
import Modal from "./Modal/Modal";

const Instructions = (props) => {
    return (
        <Modal onClose={props.onClose}>
            <p>There are nine exercises. These exercises are to be done in pairs and triplets to save time. Pairing two exercises means doing a set of the first exercise, resting 90 seconds, then doing a set of the second exercise, resting 90 seconds, and repeating until you've done 3 sets of that pair. For the triplet, you do a set of the first exercise, rest 60 seconds, do a set of the second exercise, rest 60 seconds, do a set of the third exercise, rest 60 seconds, and repeating until you've done 3 sets of that triplet. See the FAQs below if you're still confused.</p>
            <button onClick={props.onClose}>Back to work</button>
        </Modal>
    );
}

export default Instructions;