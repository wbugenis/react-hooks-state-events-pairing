import React, { useState } from "react"
import Comment from "./Comment"

const VideoInfo = ({video}) => {
    const { title, views, createdAt, upvotes, downvotes, comments } = video

    const [likeCount, handleUpvote] = useState(upvotes)
    const [dislikeCount, handleDownvote] = useState(downvotes)
    const [commentStatus, setCommentStatus] = useState(true)
    // const [sorted, setSortedStatus] = useState(false)

    const [search, setSearch] = useState("")

    const handleClick = (voteType) => {
        if (voteType) {
            handleUpvote(likeCount + 1)
        } else { 
            handleDownvote(dislikeCount + 1)
        }
    }

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    const toggleComments = () => {
        setCommentStatus(!commentStatus)
    }

    let filteredComments = comments.filter(comment => {
        return comment.user.toLowerCase().includes(search.toLowerCase())
    })

    const compareName = (a, b) => {
        if (a.user[0] < b.user[0]) {
            return -1
        } else if (a.user[0] > b.user[0]){
            return 1
        } else {
            return 0
        }
    }

    const commentArray = filteredComments.map(commentInfo => {
        console.log("commentArray returning")
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

            <button className="sortButton" onClick={()=>{
                comments.sort(compareName)
                //this.forceUpdate()
                //setSortedStatus(!sorted)
                }}>
                    Sort By User</button>

            <button className="hideButton" onClick={toggleComments}>
                {(commentStatus ? "Hide": "Show" )} Comments</button>
            <br></br>

            <input type="text" placeholder="Search" onChange={handleSearch}/>

            <div id="comments">
                <h2>{comments.length} Comments</h2>
                {( commentStatus ? commentArray: null)}
            </div>
        </div>
    )
}

export default VideoInfo;