import React from 'react';
import PostForm from './PostForm';
import { connect } from 'react-redux';
import { addPost } from '../actions/posts';

const AddPost = (props) => (
  <div>
    <h1>Add Post</h1>
    <PostForm 
      onSubmit={(post) =>{
        console.log(post);
        props.dispatch(addPost(post))
        props.history.push('/');
      }}/>
  </div>
)


export default connect()(AddPost);