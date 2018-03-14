import React from 'react';
import { connect } from 'react-redux';
import { getPost } from '../selectors/posts'
import PostForm from './PostForm';
import {editPost, deletePost} from '../actions/posts';


const EditPost =(props) => {
    return(
        <div>
            <button onClick={() => {
                props.dispatch(deletePost(props.post.id));
                props.history.push('/');
            }}>
                Remove Post
            </button>
            <PostForm 
                post={props.post} 
                onSubmit={(post) => {
                    //console.log('updated', post);
                    props.dispatch(editPost(props.post.id, post ))
                    //props.history.push('/');
                    props.history.push(`/post/details/${props.post.id}`)
                }}
            />
            
        </div>
    )
};


const mapStateToProps=(state,ownProps) => {
   return{
        post: getPost(state.posts, ownProps.match.params.id)
    };
};
    
export default connect(mapStateToProps)(EditPost);