import React from 'react';
import PostsList from '../components/PostsList';
import ListFilters from '../components/ListFilters';

const PostsByCategory = (props) => {

    const category = props.match.params.id;
    
   return (
        <div>
            <h2>Posts in category: {category}</h2>
            <ListFilters />
            <PostsList category = {category} /> 
        </div> 
    );
}

export default PostsByCategory;