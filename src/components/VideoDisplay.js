import React from "react"
import Video from "./Video"
import video from "../data/video"
import VideoInfo from "./VideoInfo"

const VideoDisplay = () => {
    return (
        <div id="VideoDisplay">
            <Video embedUrl={video.embedUrl} />
            <VideoInfo video={video} />
        </div>
    )
}

export default VideoDisplay;