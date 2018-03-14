import {createStore, combineReducers} from 'redux';
import filtersReducer from '../reducers/filters';
import postsReducer from '../reducers/posts';
import commentsReducer from '../reducers/comments';
import categoriesReducer from '../reducers/categories';



export default () => {
    //store creation
    const store = createStore(
        combineReducers({
            filters: filtersReducer,
            posts: postsReducer,
            comments: commentsReducer,
            categories: categoriesReducer,
         // users: usersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};