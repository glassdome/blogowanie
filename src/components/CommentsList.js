import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import CommentListItem from '../components/CommentListItem';
import { getVisibleComments } from '../selectors/comments'; 
import { getPost } from '../selectors/posts'

import PostListItem from '../components/PostListItem';
import AddPost from '../components/AddPost';
import {getVisiblePosts} from '../selectors/posts';


const CommentsList = (props) =>  (
		<div>
			{props.comments.map((comment) => 
				<CommentListItem  
						key={comment.id}  
						{...comment}
				/> )}                
    </div>
)
        

const mapStateToProps = (state, ownProps) => {
		const parentPostId = ownProps.parentPostId;
		const post = getPost(state.posts, parentPostId)

		const comments = getVisibleComments(
			state.comments, state.filters, parentPostId)
			return  ({
				post: post,  
				comments:comments,
      });
	};

export default connect(mapStateToProps)(CommentsList);

