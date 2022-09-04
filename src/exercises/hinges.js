import React from "react";
import romanianDeadlift from "../assets/RR/hinges/romanian-deadlift.webm";
import singleLegDeadlift from "../assets/RR/hinges/single-legged-deadlift.webm";
import bandedNordicCurl from "../assets/RR/hinges/banded-nordic-curl.webm";
import nordicCurl from "../assets/RR/hinges/nordic-curl.webm";


const hinges = [
    {
        img: romanianDeadlift,
        alt: "Romanian deadlift",
        title: "Romanian deadlift",
        keypoints: [
            <p>Stand up straight. Brace and squeeze your butt to flatten your low back (neutral spine to maybe slightly arched).</p>,
            <p>Send your butt back and lean your torso forward to avoid falling over</p>,
            <p>You can place the hands on your chest and abdomen for feedback or let them hang by your sides.</p>,
            <p>Note: The.webm is "robotic" for demonstration purposed, your execution should be smooth.</p>,
        ]
    },
    {
        img: singleLegDeadlift,
        alt: "Single legged deadlift",
        title: "Single legged deadlift",
        keypoints: [
            <p>If you lack the balance to perform these with a leg in the air, you can use an arm to brace yourself against a surface or you can straddle your legs to help with balance. <a href="https://i.imgur.com/VUF6VLa.jpg">Example</a></p>,
                ]
            },
    {
        img: bandedNordicCurl,
        alt: "Banded nordic curl",
        title: "Banded nordic curl",
        keypoints: [
            <p>Anchor your feet under something sturdy. You want to be anchored about a fist's distance away from your ankle.</p>,
            <p>Squeeze your butt to keep your hips extended</p>,
            <p>Slowly lower your torso, avoiding piking at the hips</p>,
        ]
    },
    {
        img: nordicCurl,
        alt: "Nordic curl",
        title: "Nordic curl",
        keypoints: [
            <p>Anchor your feet under something sturdy. You want to be anchored about a fist's distance away from your ankle.</p>,
            <p>Squeeze your butt to keep your hips extended</p>,
            <p>Slowly lower your torso, avoiding piking at the hips</p>,
        ]
    },
];

export default hinges;