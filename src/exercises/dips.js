import supportHold from "../assets/RR/dips/parallel-bar-support-hold.jpg"
import negativeDip from "../assets/RR/dips/negative-dip.gif"
import regularDip from "../assets/RR/dips/regular-dip.gif"

const dips = [
    {
        img: supportHold,
        alt: "Parallel bar support hold",
        title: "Parallel bar support hold",
        keypoints: [
            'Work up to 3 sets of 1 minute holds for this progression',
            'If you can\'t hold yourself up at all, consider using bands or your feet to assist you until you gain the necessary strength.',
        ]
    },
    {
        img: negativeDip,
        alt: "Negative dip",
        title: "Negative dip",
        keypoints: [
            'This exercise is only the descent. To get to the starting position you can jump or use a box or anything.',
            'Lower yourself with control. Work up to 10 sec descents',
                ]
            },
    {
        img: regularDip,
        alt: "Regular dip",
        title: "Regular dip",
        keypoints: [
            'Straight or slightly hollow body. No bending at the hips!',
            'Lock out the arms and depress the shoulderblades (what does that even mean?) at the top',
            'Go as far down as you can',
            'Elbows in',
        ]
    },
]

export default dips;