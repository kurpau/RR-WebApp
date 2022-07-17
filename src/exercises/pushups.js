import wallPushup from "../assets/RR/pushups/wall-pushup.gif"
import inclinePushup from "../assets/RR/pushups/incline-pushup.gif"
import fullPushup from "../assets/RR/pushups/full-pushup.gif"
import diamondPushup from "../assets/RR/pushups/diamond-pushup.gif"
import pseudoPushup from "../assets/RR/pushups/pseudo-planche-pushup.gif"

const pushups = [
    {
        img: wallPushup,
        alt: "Wall pushup",
        title: "Wall pushup",
        keypoints: [
            'Standing next to a wall, put your hands on the wall and perform a pushup.',
        ]
    },
    {
        img: inclinePushup,
        alt: "Incline pushup",
        title: "Incline pushup",
        keypoints: [
            'Finding some raised object, put your hands on said object and perform a pushup. Lower the height to increase the difficulty.'
        ]
    },
    {
        img: fullPushup,
        alt: "Full pushup",
        title: "Full pushup",
        keypoints: [
            'Body in a straight line from head to toe: don\'t let the hips sag!',
            'Lock out arms and protract the shoulderblades (what does that even mean?) at the top',
            'Go down until chest nearly touches the ground',
            'Keep the elbows in, don\'t let them flare out',
            'Don\'t shrug up your shoulders to your ears, focus on depressing the shoulderblades (what does that even mean?).',
        ]
    },
    {
        img: diamondPushup,
        alt: "Diamond pushup",
        title: "Diamond pushup",
        keypoints: [
            'Put your hands close together so the thumbs and index fingers touch, then perform a pushup.',
            'If this is too difficult or feels uncomfortable, put your hands just a bit closer than in a normal pushup. Work on moving the hands closer together over time until you reach diamond pushups.',
        ]
    },
    {
        img: pseudoPushup,
        alt: "Pseudo planche pushup",
        title: "Pseudo planche pushup",
        keypoints: [
            'Putting your hands sideways, lean forward with a straight body until your shoulders are in front of your hands. Perform a pushup while maintaining forward lean. Protract the shoulderblades at the top.',
            'Increase forward lean to make more difficult. Decrease forward lean to make easier. You won\'t run out of resistance anytime soon if you keep increasing your forward lean.',
        ]
    },
]

export default pushups;