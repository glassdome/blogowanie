import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {deletePost, increasePostVoteScore, decreasePostVoteScore} from '../actions/posts';
import VoteChanger from './VoteChanger';
import moment from 'moment';

const PostListItem = (props) => {
   const { title, timestamp, author, category, 
                    voteScore, id, commentCount } = props.post
   const createdAt = moment(timestamp).format('LLL')   
    const handlePostIncrease = ( id ) => dispatch( increasePostVoteScore({id}) );
    const handlePostDecrease = ( id ) => dispatch( decreasePostVoteScore({id}) );
    
   return (  
     <div>
        <Link to={`/post/details/${id}`} ><h3>{title}</h3></Link> 
        <button onClick={ () => 
            props.dispatch( deletePost ( id ))
        }>Remove</button>
        <div>
            By {author} on {createdAt}     
        </div>
        <span>
            category: {category}   comments: {commentCount} score: {voteScore}    
        </span>
        <VoteChanger 
            handleIncrease = {handlePostIncrease}
            handleDecrease = {handlePostDecrease} 
            id = {id}
        />
        <hr/><br/>
    </div>
    )
};


export default connect()(PostListItem);
