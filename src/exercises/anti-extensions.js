import React from "react";
import plank from "../assets/RR/anti-extensions/plank.webm"
import ringsRollout from "../assets/RR/anti-extensions/rings-rollout.webm"


const antiExtensions = [
    {
        img: plank,
        alt: "Plank",
        title: "Plank",
        keypoints: [
            <p>Work up to a 30s hold then move on to your ring rollouts</p>,
        ]
    },
    {
        img: ringsRollout,
        alt: "Rings rollout",
        title: "Rings rollout",
        keypoints: [
            <p>Elbows should stay straight</p>,
            <p>Remain in a hollow body position (ribs down, butt tucked)</p>,
            <p>Keep your hands as close as your overhead mobility will allow.</p>,
            <p>Higher ring position will make this easier. Elevating the feet will make it harder.</p>,
        ]
    },
]

export default antiExtensions;