import scapularPull from "../assets/RR/pullups/scapular-pull.gif"
import archHang from "../assets/RR/pullups/arch-hang.gif"
import negativePullup from "../assets/RR/pullups/negative-pullup.gif"
import perfectPullup from "../assets/RR/pullups/perfect-pullup.gif"

const pullups = [
    {
        img: scapularPull,
        alt: "Scapular pull",
        title: "Scapular pull",
        keypoints: [
            "Elbows should stay straight",
            "Your back will arch more as you get stronger",
            'These should be performed with a pause at the "top". Squeeze your shoulders, hold it for 3-5s then release into a dead hang under control',
            "If you can't pull out of the dead hang at all, consider using bands or your feet to assist you until the gain the necessary strength.",
        ]
    },
    {
        img: archHang,
        alt: "Arch hang",
        title: "Arch hang",
        keypoints: [
            'Elbows should stay straight',
            'Hold it for time/reps',
            'Start at this level',
            'Progress towards a 90 degree in your shoulder',
        ]
    },
    {
        img: negativePullup,
        alt: "Negative pullup",
        title: "Negative pullup",
        keypoints: [
            'Jump to the top of the pull-up position, then slowly (as slowly as you can), lower yourself until your arms are straight. Build up to 10sec negatives!',
        ]
    },
    {
        img: perfectPullup,
        alt: "Pullup",
        title: "Pullup",
        keypoints: [
            'Body slightly hollow with straight legs throughout the whole exercise. Don\'t cross your legs.',
            'If you cannot get straight legs, it\'s preferable to keep the feet in front of the body rather than behind.',
            'Arms straight at the bottom. Don\'t think about anything else, just straight arms. The rest will happen automatically.',
            'Strive for chest to bar at the top. For this the forearms have to deviate from vertical, which may be a bit hard on the elbows, so build up to it slowly.',
            'Keep the neck in a neutral position: avoid craning it to get your chin over the bar',
            'It\'s natural for your legs to come forward: this keeps your centre of mass under the bar. Just make sure you\'re not violently swinging them upwards.',
        ]
    },
] 

export default pullups;