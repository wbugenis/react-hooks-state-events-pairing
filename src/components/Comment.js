import React from "react"

const Comment = ({ commentInfo }) => {
    const {user, comment} = commentInfo
    return (
        <>
            <b>{user}</b>
            <p>{comment}</p>
        </>
    )

} 

export default Comment;