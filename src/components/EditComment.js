import React from 'react';
import CommentForm from './CommentForm';
import { connect } from 'react-redux';
import { editComment } from '../actions/comments';
import { getComment } from '../selectors/comments';

const EditComment = (props) => {
    
     return (
        <div>
          <h3>Edit Comment</h3> 
          <CommentForm 
						  comment = {props.comment}
						 	onSubmit={(comment) => {
							props.dispatch(editComment(props.commentId, comment ))
							//props.history.push('/');
							props.history.push(`/post/details/${props.comment.parentId}`)
					}}
          />     
        </div>
    );  
}

const mapStateToProps = (state, ownProps) => {
    const commentId = ownProps.match.params.id;
    return {
        commentId: commentId,
        comment: getComment(state.comments, commentId)
    };
};

export default connect(mapStateToProps)(EditComment);