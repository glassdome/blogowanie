import React from 'react';
import { Link } from 'react-router-dom';

const Comment = (props) => (
    <div>
        <p>comment {props.id} by {props.author} {props.voteScore} points  
        <Link to={`/edit/comment/${props.id}`}> Edit</Link></p>
        
        <p>{props.body}</p>
    </div>
)

export default Comment;