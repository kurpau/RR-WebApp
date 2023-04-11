import React from "react";
import supportHold from "../assets/RR/dips/parallel-bar-support-hold.webm"
import negativeDip from "../assets/RR/dips/negative-dip.webm"
import regularDip from "../assets/RR/dips/regular-dip.webm"

const dips = [
    {
        img: supportHold,
        alt: "Parallel bar support hold",
        title: "Parallel bar support hold",
        keypoints: [
            <p>Press the shoulders down</p>,
            <p>Elbow pits face forward</p>,
            <p>Feet and thighs together</p>,
            <p>Work up to 3 sets of 1 minute holds for this progression</p>,
            <p>If you can't hold yourself up at all, consider using bands or your feet to assist you until you gain the necessary strength.</p>,
        ]
    },
    {
        img: negativeDip,
        alt: "Negative dip",
        title: "Negative dip",
        keypoints: [
            <p>This exercise is only the descent. To get to the starting position you can jump or use a box or anything.</p>,
            <p>Lower yourself with control. Work up to 10 sec descents</p>,
                ]
            },
    {
        img: regularDip,
        alt: "Regular dip",
        title: "Regular dip",
        keypoints: [
            <p>Straight or slightly hollow body. No bending at the hips!</p>,
            <p>Lock out the arms and <a href="https://www.reddit.com/r/bodyweightfitness/wiki/kb/positioning" target="_blank" rel="noopener noreferrer">depress the shoulderblades</a> at the top</p>,
            <p>Go as far down as you can</p>,
            <p>Elbows in</p>,
        ]
    },
]

export default dips;