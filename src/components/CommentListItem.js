import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import VoteChanger from './VoteChanger';
import moment from 'moment';
import { deleteComment, increaseCommentVoteScore, decreaseCommentVoteScore } from '../actions/comments'

const CommentListItem = (comment) => {
   const {dispatch, timestamp,author, body, voteScore, id, parentId} = comment
   const handleCommentIncrease = ( id ) => dispatch( increaseCommentVoteScore({id}) );
   const handleCommentDecrease = ( id ) => dispatch( decreaseCommentVoteScore({id}) );
   const createdAt =  moment(timestamp).format('LLL');
    return (  
			 <div>
					 <button onClick={ () => 
							dispatch( deleteComment ( id, parentId ))
					}>Remove</button>
					<p><h3>{body}</h3></p>
					<span>by {author} on {createdAt}   score {voteScore}  </span>
					<VoteChanger 
							handleIncrease = {handleCommentIncrease}
							handleDecrease = {handleCommentDecrease} 
							id = {id}
					/>
					<Link to={`/edit/comment/${id}`} ><h3>Edit</h3></Link>
					<hr/><br/>
    	</div>
    )
};

export default connect()(CommentListItem);