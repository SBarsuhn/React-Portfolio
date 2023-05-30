import React, {useState , useEffect } from "react";
import B from '../images/B.svg'
import A from '../images/A.svg'
import R from '../images/R.svg'
import S from '../images/S.svg'
import U from '../images/U.svg'
import H from '../images/H.svg'
import N from '../images/N.svg'


// const track = document.getElementById("imagetrack");




// window.onmousedown = (e) => {
//   track.dataset.mouseDownAt = e.clientX;
// };

// window.onmouseup = () => {
//   track.dataset.mouseDownAt = "0";
//   track.dataset.prevPercentage = track.dataset.percentage;
// };


// window.onmousemove = (e) => {
//   if (track.dataset.mouseDownAt === "0") return;
//   const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
//     maxDelta = window.innerWidth / 2;
//   const percentage = (mouseDelta / maxDelta) * -100,
//     nextPercentageUnconstrained =
//       parseFloat(track.dataset.prevPercentage) + percentage,
//     nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
//   track.dataset.percentage = nextPercentage;
//   track.animate(
//     { transform: `translate(${nextPercentage}%, -50%)` },
//     { duration: 1200, fill: "forwards" }
//   );
//   for (const image of track.getElementsByClassName("image")) {
//       image.animate(
//       {
//         objectPosition: `${100 + nextPercentage}% center`,
//       },
//       { duration: 1200, fill: "forwards" }
//       );
//     }
// };



const Intro = () => {
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true)
        
        
    })
    return (
        <div id="imagetrack" className="imagetrack" data-mouse-down-at="0" data-prev-percentage="0">
            <img className="image" src={B} draggable="false" />
    <img className="image" src={A} draggable="false" />
    <img className="image" src={R} draggable="false" />
    <img className="image" src={S} draggable="false" />
    <img className="image" src={U} draggable="false" />
    <img className="image" src={H} draggable="false" />
    <img className="image" src={N} draggable="false" />
    <button className="continue"><span className="material-symbols-outlined">
arrow_forward_ios
</span></button>
</div>
    )
}


export default Intro;