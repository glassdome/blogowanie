import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Comment from '../components/Comment';
import CommentListItem from '../components/CommentListItem';
import { getVisibleComments } from '../selectors/comments'; 
import { getPost } from '../selectors/posts'
import CommentsList from '../components/CommentsList';
import PostListItem from '../components/PostListItem';
import AddPost from '../components/AddPost';
import VoteChanger from '../components/VoteChanger';
import {getVisiblePosts} from '../selectors/posts';
import {increasePostVoteScore, decreasePostVoteScore} from '../actions/posts';
import ListFilters from '../components/ListFilters';

const PostDetails = (props) => {
    const parentPostId = props.match.params.id;
    const post = getPost(props.posts, parentPostId);
    const { id, title, body, category, 
            voteScore, commentCount, dispatch } = post;
    const handlePostIncrease = ( id ) => props.dispatch( increasePostVoteScore({id}) );
    const handlePostDecrease = ( id ) => props.dispatch( decreasePostVoteScore({id}) );
    return (
        <div>
            <h5>post:{id}</h5>
            <h2>{post.title} </h2>
            <h3>{body}</h3>
            <span>category: {category} | {commentCount} comments  |  score {voteScore}  </span>
            <VoteChanger 
                handleIncrease = {handlePostIncrease}
                handleDecrease = {handlePostDecrease}
                id = {id}
            />
            <Link to={`/edit/post/${id}`}> Edit Post</Link>
            <hr/><hr/>
            <div>
                <h3>Comments for post: {post.id}</h3>
                <ListFilters />
                <hr/><br/>
                <Link to={`/add/comment/${id}`} className='add-contact'>Add Comment</Link>
                <hr/><br/>
            </div>
           
            <div>
              <CommentsList parentPostId = {parentPostId}/>
            </div>     
        </div>

)};



const mapStateToProps = (state, ownProps) =>  ({
                posts: state.posts,
                dispatch: state.dispatch
        });
	
export default connect(mapStateToProps)(PostDetails);