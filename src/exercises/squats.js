import assShrimpSquat from "../assets/RR/squats/assisted-squat.gif"
import fullSquat from "../assets/RR/squats/full-squat.gif"
import splitSquat from "../assets/RR/squats/split-squat.gif"
import bulgSplitSquat from "../assets/RR/squats/bulgarian-split-squat.gif"
import begShrimpSquat from "../assets/RR/squats/beginner-shrimp-squat.gif"
import intShrimpSquat from "../assets/RR/squats/intermediate-shrimp-squat.gif"
import advShrimpSquat from "../assets/RR/squats/advanced-shrimp-squat.gif"

const squats = [
    {
        img: assShrimpSquat,
        alt: "Assisted squat",
        title: "Assisted squat",
        keypoints: [
            'Grab something in front of you and use your hands to assist in the squat. Reduce assistance over time.',
        ]
    },
    {
        img: fullSquat,
        alt: "Full squat",
        title: "Full squat",
        keypoints: [
            'Stand up straight at the top',
            'Go as low as you can, preferably until the hips are below the knees',
            'Dig your big toe and heel into the ground',
            'Keep your knee in-line with your toes',
            'Don\'t let the knees come inward on either the descend or the ascend; think about pushing the knees out',
        ]
    },
    {
        img: splitSquat,
        alt: "Split squat",
        title: "Split squat",
        keypoints: [
            'Remain in the split stance throughout the set. Unlike a lunge, you don\'t return to a "feet together" stance.'
        ]
    },
    {
        img: bulgSplitSquat,
        alt: "Bulgarian split squat",
        title: "Bulgarian split squat",
        keypoints: [
            'You can progress this further by elevating both your legs',
        ]
    },
    {
        img: begShrimpSquat,
        alt: "Beginner shrimp squat",
        title: "Beginner shrimp squat",
        keypoints: [
            'Make sure your knee and toes leave the floor at the same time',
        ]
    },
    {
        img: intShrimpSquat,
        alt: "Intermediate shrimp squat",
        title: "Intermediate shrimp squat",
        keypoints: [
            'In this variation, the knee touches the ground but the toes do not.',
        ]
    },
    {
        img: advShrimpSquat,
        alt: "Advanced shrimp squat",
        title: "Advanced shrimp squat",
        keypoints: [
            'In this variation, you hold your heel as you descend. only the knee touches the floor.',
        ]
    },
]

export default squats;