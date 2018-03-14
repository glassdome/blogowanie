import React from 'react';
import PostsList from './PostsList';
import CategoriesList from './CategoriesList';
import ListFilters from './ListFilters';



const PostsMainPage = () => (
    <div>
        <h2>Categories</h2>
        <CategoriesList />
        <ListFilters />
         <h1>Posts</h1>
        <PostsList />
    </div>
)

export default PostsMainPage;