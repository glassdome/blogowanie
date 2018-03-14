import uuid from 'uuid';

// Posts action generators 

//ADD_POST
export const addPost = (
    {   
        timestamp= undefined,
        title = '',
        body = '',
        author = undefined,
        category ='react',
        voteScore = 1,
        deleted = false,
        commentCount = 0     
    } = {}) => ({
    type: 'ADD_POST',
    post: {
        id: uuid(),
        timestamp,
        title,
        body,
        author,
        category,
        voteScore,
        deleted,
        commentCount
    }
})

//EDIT_POST
export const editPost = (id, updates) => ({
    type: 'EDIT_POST',
    id,
    updates
})

//INCREASE__POST_VOTE_SCORE
export const increasePostVoteScore = ({id} = {} ) => ({
    type: 'INCREASE_POST_VOTE_SCORE',
    id
})

//DECREASE_POST_VOTE_SCORE
export const decreasePostVoteScore = ( {id} = {} ) => ({
    type: 'DECREASE_POST_VOTE_SCORE',
    id
})

//DELETE_POST
export const deletePost = (id) => ({
    type: 'DELETE_POST',
    id
})