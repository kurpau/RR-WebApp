import React from "react";
import assShrimpSquat from "../assets/RR/squats/assisted-squat.webm"
import fullSquat from "../assets/RR/squats/full-squat.webm"
import splitSquat from "../assets/RR/squats/split-squat.webm"
import bulgSplitSquat from "../assets/RR/squats/bulgarian-split-squat.webm"
import begShrimpSquat from "../assets/RR/squats/beginner-shrimp-squat.webm"
import intShrimpSquat from "../assets/RR/squats/intermediate-shrimp-squat.webm"
import advShrimpSquat from "../assets/RR/squats/advanced-shrimp-squat.webm"

const squats = [
    {
        img: assShrimpSquat,
        alt: "Assisted squat",
        title: "Assisted squat",
        keypoints: [
            <p>Grab something in front of you and use your hands to assist in the squat. Reduce assistance over time.</p>,
        ]
    },
    {
        img: fullSquat,
        alt: "Full squat",
        title: "Full squat",
        keypoints: [
            <p>Stand up straight at the top</p>,
            <p>Go as low as you can, preferably until the hips are below the knees</p>,
            <p>Dig your big toe and heel into the ground</p>,
            <p>Keep your knee in-line with your toes</p>,
            <p>Don\'t let the knees come inward on either the descend or the ascend; think about pushing the knees out</p>,
        ]
    },
    {
        img: splitSquat,
        alt: "Split squat",
        title: "Split squat",
        keypoints: [
            <p>Remain in the split stance throughout the set. Unlike a lunge, you don\'t return to a "feet together" stance.</p>
        ]
    },
    {
        img: bulgSplitSquat,
        alt: "Bulgarian split squat",
        title: "Bulgarian split squat",
        keypoints: [
            <p>You can progress this further by elevating both your legs</p>,
        ]
    },
    {
        img: begShrimpSquat,
        alt: "Beginner shrimp squat",
        title: "Beginner shrimp squat",
        keypoints: [
            <p>Make sure your knee and toes leave the floor at the same time</p>,
        ]
    },
    {
        img: intShrimpSquat,
        alt: "Intermediate shrimp squat",
        title: "Intermediate shrimp squat",
        keypoints: [
            <p>In this variation, the knee touches the ground but the toes do not.</p>,
        ]
    },
    {
        img: advShrimpSquat,
        alt: "Advanced shrimp squat",
        title: "Advanced shrimp squat",
        keypoints: [
            <p>In this variation, you hold your heel as you descend. only the knee touches the floor.</p>,
        ]
    },
]

export default squats;