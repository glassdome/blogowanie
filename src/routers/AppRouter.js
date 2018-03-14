import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import AddComment from '../components/AddComment';
import AddPost from '../components/AddPost';
import CommentsList from '../components/CommentsList';
import EditComment from '../components/EditComment';
import EditPost from '../components/EditPost';
import HomePage from '../components/PostsMainPage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import PostsList from '../components/PostsList';
import PostDetails from '../components/PostDetails';
import PostsMainPage from '../components/PostsMainPage';
import CategoriesList from '../components/CategoriesList';
import PostsByCategory from '../components/PostsByCategory';



const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/"  component={PostsMainPage} exact={true} />
                <Route path="/add/comment/:id" component={AddComment} exact={true} />
                <Route path="/add/post" component={AddPost} exact={true}/>
                <Route path="/edit/comment/:id" component={EditComment} exact={true}/>
                <Route path="/edit/post/:id" component={EditPost} />
                <Route path="/categories" component={CategoriesList} />
                <Route path="/posts/category/:id" component={PostsByCategory} />
                <Route path="/comment/:id" component={AddComment} />
                <Route path="/posts" component={PostsList} exact={true} />
                <Route path="/post/details/:id" component={PostDetails} exact={true}/>
                <Route path  component={NotFoundPage} />
            </Switch>    
        </div>
    </BrowserRouter>

)

export default AppRouter;