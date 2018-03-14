import React from 'react';
import { connect } from 'react-redux';
import CommentForm from './CommentForm';
import { addComment } from '../actions/comments';
import { getPost } from '../selectors/posts';

const AddComment = (props) => {
    
        return (
            <div>
              <CommentForm 
                parentId={props.parentId}
                category={props.category}
                onSubmit={(comment)=> {
                    console.log('comment',comment)
                    props.dispatch(addComment(comment));
                    props.history.push(`/post/details/${props.parentId}`)
              } }/>
            </div>   
        )
    }

const mapStateToProps = (state, ownProps) => {
    const commentParentId = ownProps.match.params.id;
    const post =  getPost(state.posts, commentParentId);
    
    return {
        parentId: commentParentId,
        category: post.category      
    }    
}    

export default connect(mapStateToProps)(AddComment);