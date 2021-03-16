import React, { useState } from "react"
import Comment from "./Comment"

const VideoInfo = ({video}) => {
    const { title, views, createdAt, upvotes, downvotes, comments } = video

    const [likeCount, handleUpvote] = useState(upvotes)
    const [dislikeCount, handleDownvote] = useState(downvotes)
    const [commentStatus, setCommentStatus] = useState(true)

    const handleClick = (voteType) => {
        if (voteType) {
            handleUpvote(likeCount + 1)
        } else { 
            handleDownvote(dislikeCount + 1)
        }
    }

    const toggleComments = () => {
        setCommentStatus(!commentStatus)
    }

    const commentArray = comments.map(commentInfo => {
        return <Comment key = {commentInfo.id} commentInfo={commentInfo} />
    })

    return (
        <div>
            <h1>{title}</h1>
            <p>{views} Views | {createdAt}</p>
            <button className="upvoteButton" onClick={() => handleClick(true)}>
                👍 {likeCount}
            </button>
            <button className="downvoteButton" onClick={ () => handleClick(false)}>
                👎 {dislikeCount}
            </button>
            <br></br>
            <button className="hideButton" onClick={toggleComments}>
                {(commentStatus ? "Hide": "Show" )} Comments</button>
            <div id="comments">
                <h2>{comments.length} Comments</h2>
                {(commentStatus ? commentArray : null)}
            </div>
        </div>
    )
}

export default VideoInfo;