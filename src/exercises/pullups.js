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
            <p>Elbows should stay straight</p>,
            <p>Your back will arch more as you get stronger</p>,
            <p>These should be performed with a pause at the "top". Squeeze your shoulders, hold it for 3-5s then release into a dead hang under control</p>,
            <p>If you can't pull out of the dead hang at all, consider using bands or your feet to assist you until the gain the necessary strength.</p>,
        ]
    },
    {
        img: archHang,
        alt: "Arch hang",
        title: "Arch hang",
        keypoints: [
            <p>Elbows should stay straight</p>,
            <p>Hold it for time/reps</p>,
            <p>Progress towards a 90 degree in your shoulder. Like <a href="https://i.ytimg.com/vi/JusddCep6PA/hqdefault.jpg">this</a></p>,
        ]
    },
    {
        img: negativePullup,
        alt: "Negative pullup",
        title: "Negative pullup",
        keypoints: [
            <p>Jump to the top of the pull-up position, then slowly (as slowly as you can), lower yourself until your arms are straight. Build up to 10sec negatives!</p>,
        ]
    },
    {
        img: perfectPullup,
        alt: "Pullup",
        title: "Pullup",
        keypoints: [
            <p>Body slightly <a href="https://www.reddit.com/r/bodyweightfitness/wiki/kb/positioning">hollow</a> with straight legs throughout the whole exercise. Don\'t cross your legs.</p>,
            <p>If you cannot get straight legs, it\'s preferable to keep the feet in front of the body rather than behind.</p>,
            <p>Arms straight at the bottom. Don\'t think about anything else, just straight arms. The rest will happen automatically.</p>,
            <p>Strive for chest to bar at the top. For this the forearms have to deviate from vertical, which may be a bit hard on the elbows, so build up to it slowly.</p>,
            <p>Keep the neck in a neutral position: avoid craning it to get your chin over the bar</p>,
            <p>It\'s natural for your legs to come forward: this keeps your centre of mass under the bar. Just make sure you\'re not violently swinging them upwards.</p>,
        ]
    },
] 

export default pullups;