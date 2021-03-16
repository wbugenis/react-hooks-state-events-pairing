import React from "react";


const Video = ({embedUrl}) => {
    return (
        <div className="App">
            <iframe
            width="919"
            height="525"
            src={embedUrl}
            frameborder="0"
            allowfullscreen
            title="Thinking in React"
            />
        </div>
    );
}

export default Video;