import inclineRow from "../assets/RR/rows/incline-row.gif"
import horizontalRow from "../assets/RR/rows/horizontal-row.gif"
import wideRow from "../assets/RR/rows/wide-row.gif"

const rows = [
    {
        img: inclineRow,
        alt: "Incline row",
        title: "Incline row",
        keypoints: [
            'Perform a row, but with the body position somewhere between vertical and horizontal. Go closer to horizontal to make it harder.',
            'Don\'t have a low bar? Incline rows using nothing but a bedsheet and closed door.',
        ]
    },
    {
        img: horizontalRow,
        alt: "Horizontal row",
        title: "Horizontal row",
        keypoints: [
            'Straight body',
            'Elbows in',
            'Arms straight at the bottom',
            'Rings/bar to chest and shoulder blades fully retracted (pinched together) at the top',
            'Don\'t let your shoulders shrug up',
        ]
    },
    {
        img: wideRow,
        alt: "Wide row",
        title: "Wide row",
        keypoints: [
            'It\'s okay to flare your elbows on this one.',
            'On a bar: take a wide grip (1.5 times shoulder width) and perform rows like this.',
            'On rings: while performing a row, bring out the elbows to the side up to a 90 degree angle.',
        ]
    },
]

export default rows;