import React from "react";
import inclineRow from "../assets/RR/rows/incline-row.gif"
import horizontalRow from "../assets/RR/rows/horizontal-row.gif"
import wideRow from "../assets/RR/rows/wide-row.gif"

const rows = [
    {
        img: inclineRow,
        alt: "Incline row",
        title: "Incline row",
        keypoints: [
            <p>Perform a row, but with the body position somewhere between vertical and horizontal. Go closer to horizontal to make it harder.</p>,
        ]
    },
    {
        img: horizontalRow,
        alt: "Horizontal row",
        title: "Horizontal row",
        keypoints: [
            <p>Straight body</p>,
            <p>Elbows in</p>,
            <p>Arms straight at the bottom</p>,
            <p>Rings/bar to chest and shoulder blades fully retracted (pinched together) at the top</p>,
            <p>Don't let your shoulders shrug up</p>,
        ]
    },
    {
        img: wideRow,
        alt: "Wide row",
        title: "Wide row",
        keypoints: [
            <p>It's okay to flare your elbows on this one.</p>,
            <p>On a bar: take a wide grip (1.5 times shoulder width) and perform rows like this.</p>,
            <p>On rings: while performing a row, bring out the elbows to the side up to a 90 degree angle.</p>,
        ]
    },
]

export default rows;