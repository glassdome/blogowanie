import React from 'react';
import { connect } from 'react-redux';
import PostListItem from '../components/PostListItem';
import AddPost from '../components/AddPost';
import {getVisiblePosts} from '../selectors/posts';


const PostsList = (props) =>  (
    <div>   
        {   
          props.posts.map((post) => {
              return <PostListItem 
                      	key={post.id} 
                        post={post} 
                     />
		  })}
    </div>
)
        

const mapStateToProps = (state, ownProps) => {
    const category = ownProps.category;
    const posts = getVisiblePosts(state.posts, state.filters, ownProps.category);
        return {	
            posts: posts,
        }
    };


export default connect(mapStateToProps)(PostsList);
