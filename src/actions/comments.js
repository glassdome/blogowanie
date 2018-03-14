import uuid from 'uuid';

//Comment Acton Generators


//ADD_COMMENT

export const addComment = (
    {   
        parentId,
        timestamp= undefined,
        body = '',
        author = undefined,
        category ='react',
        voteScore = 1,
        deleted = false,  
        parentDeleted = false  
    } = {}) => ({
    type: 'ADD_COMMENT',
    comment: {
        id: uuid(),
        parentId,
        timestamp,
        body,
        author,
        category,
        voteScore,
        deleted,
        parentDeleted
    }
})

//EDIT_COMMENT
export const editComment = (id, updates) => ({
    type: 'EDIT_COMMENT',
    id,
    updates
})


//DELETE_COMMENT
export const deleteComment = (id, parentId) => ({
    type: 'DELETE_COMMENT',
    id,
    parentId
})

//INCREASE__COMMENT_VOTE_SCORE
export const increaseCommentVoteScore = ({id} = {} ) => ({
    type: 'INCREASE_COMMENT_VOTE_SCORE',
    id
})

//DECREASE__COMMENT_VOTE_SCORE
export const decreaseCommentVoteScore = ( {id} = {} ) => ({
    type: 'DECREASE__COMMENT_VOTE_SCORE',
    id
})


