import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import  './styles/styles.scss'; 

import {addPost, increasePostVoteScore} from './actions/posts.js';
import {setTextFilter, sortByScore, sortByDate} from './actions/filters';
import {getVisiblePosts} from './selectors/posts';
import {getVisibleComments, getComment} from './selectors/comments';
import { increaseCommentVoteScore, addComment } from './actions/comments';


const store = configureStore();
console.log(store.getState());
store.subscribe(() => {
    const state = store.getState();
    
    // const visiblePosts = getVisiblePosts(state.posts, state.filters);
    // console.log("Filtered posts", visiblePosts);


    //postids: 8xf0y6ziyjabvozdd253nd, 6ni6ok3ym7mf1p33lnez
    //commentis: "8tu4bsun805n8un48ve89" ,894tuq4ut84ut8v4t8wun89g


    const visibleComments = getVisibleComments(state.comments, state.filters,"8xf0y6ziyjabvozdd253nd");
    //console.log('Filtered comments', visibleComments);

   // console.log('comment', getComment(state.comments, "894tuq4ut84ut8v4t8wun89g"));
})

// store.dispatch(setTextFilter(''));
// store.dispatch(sortByDate());
//store.dispatch(sortByScore());
// store.dispatch(increaseCommentVoteScore({ id:"8tu4bsun805n8un48ve89"}))
// store.dispatch(increasePostVoteScore({id: "6ni6ok3ym7mf1p33lnez"}))
// store.dispatch(increasePostVoteScore({id: "6ni6ok3ym7mf1p33lnez"}))
store.dispatch(addComment( {
        parentId: "8xf0y6ziyjabvozdd253nd",
        timestamp: 200000,
        body: 'I am a COMMENT.',
        author: 'thingtwo',
        voteScore: 1,
        deleted: false,
        parentDeleted: false
      }
))


const jsx = (
     <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));


