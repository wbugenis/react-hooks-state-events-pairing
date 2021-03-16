import React, { useState } from "react"

const Comment = ({ commentInfo }) => {
    const {user, comment} = commentInfo

    const [likeCount, handleUpvote] = useState(0)
    const [dislikeCount, handleDownvote] = useState(0)
    const [showComment, toggleShow] = useState(true)

    const handleClick = (voteType) => {
        if (voteType) {
            handleUpvote(likeCount + 1)
        } else { 
            handleDownvote(dislikeCount + 1)
        }
    }

    return (
        <>
            {(showComment ? (
            <>
                <b>{user}</b>
                <p>{comment}</p>
                <button className="upvoteButton" onClick={() => handleClick(true)}>
                    👍 {likeCount}
                </button>
                <button className="downvoteButton" onClick={ () => handleClick(false)}>
                    👎 {dislikeCount}
                </button>
                <br></br>
                <button className="deleteButton" onClick={() => toggleShow(!showComment) }>
                    Delete Comment
                </button>
            </>)
            : null)
        }
        </>
    )

} 

export default Comment;