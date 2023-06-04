import React from "react";
import ImageTrack from "./imagetrack";
import Home from './home'
import { isMobile } from "react-device-detect";

const Intro = () => {
    return (
    <div>{isMobile ? <Home /> : <ImageTrack />}</div>
    )
    // return (
    //    <ImageTrack />
    // )
}


export default Intro;