//COMMENTS REDUCER

const commentsReducerDefaultState = {
    byId:{
        "894tuq4ut84ut8v4t8wun89g": {
            id: '894tuq4ut84ut8v4t8wun89g',
            parentId: "8xf0y6ziyjabvozdd253nd",
            timestamp: 200,
            body: 'Hi there! I am a COMMENT.',
            author: 'thingtwo',
            voteScore: 6,
            deleted: false,
            parentDeleted: false
          },
          "8tu4bsun805n8un48ve89": {
            id: '8tu4bsun805n8un48ve89',
            parentId: "8xf0y6ziyjabvozdd253nd",
            timestamp: 1000,
            body: 'Comments. Are. Cool.',
            author: 'thingone',
            voteScore: -5,
            deleted: false,
            parentDeleted: false
          },
          "8tu4bsun805n8un48ve66": {
            id: '8tu4bsun805n8un48ve66',
            parentId: "6ni6ok3ym7mf1p33lnez",
            timestamp: 1469479767190,
            body: 'Another excellent redux comment.',
            author: 'thingtwo',
            voteScore: 10,
            deleted: false,
            parentDeleted: false
          }
    },
    allIds:["894tuq4ut84ut8v4t8wun89g", "8tu4bsun805n8un48ve89", "8tu4bsun805n8un48ve66"]
};


const commentsReducer = (state = commentsReducerDefaultState, action) => {
    const byId = 'byId';
    const allIds = 'allIds';
    
    switch (action.type) {
        case 'ADD_COMMENT':
            return {
                ...state,
                [byId]: {
                    ...state[byId],
                    [action.comment.id]: {
                        ...action.comment
                    }
                },
                [allIds]: [...state[allIds], action.comment.id]
            }; //end ADD_COMMENT

        
         case 'EDIT_COMMENT':
         {  const foundId = state.allIds.find( (commentId) => commentId === action.id )
            if (foundId) {
                return {
                    ...state,
                    [byId]: {
                        ...state[byId],
                        [action.id ]: {
                        ...state[byId][action.id],
                        ...action.updates
                        }
                    } 
                }
            }else{
                return state;
            }; 
        }; //end EDIT_COMMENT

        case 'DELETE_COMMENT': 
        { const foundId = state.allIds.find((commentId) => commentId === action.id )
            if ( foundId ) {
                return {
                    ...state,
                    [byId]: {
                        ...state[byId],
                        [action.id]: {
                            ...state[byId][action.id],
                            deleted: true
                        }
                    }
                }
            }else{
                return state;
            }
        };//end DELETE_COMMENT

        //Delete COMMENTS of a deleted post
        case 'DELETE_POST': { //filter comments of deleted post
            const commentsToDelete = state.allIds.filter(
                (commentId) => state[byId][commentId].parentId === action.id );
                let updatedComments;
                if ( commentsToDelete.length > 0 ) {
                    updatedComments = commentsToDelete.reduce(( acc, commentId) => { 
                    acc = { ...acc, 
                            ...{ [commentId]: {
                                 ...state[byId][commentId],
                                    deleted: true,
                                    parentDeleted: true
                                }}}
                    return acc } , {}) //end reduce    
                }else{ return state }//end if
                return { 
                         ...state,
                            [byId]: {
                                ...state[byId],
                                ...updatedComments                                   
                            }
                        }
        };//end DELETE_POST
            
        case 'INCREASE_COMMENT_VOTE_SCORE': 
            { const foundId = state.allIds.find((commentId) => commentId === action.id )
               
                if ( foundId ) {
                    return {
                        ...state,
                        [byId]: {
                            ...state[byId],
                            [action.id ]: {
                            ...state[byId][action.id],
                            voteScore: state[byId][action.id].voteScore + 1
                            }
                        } 
                    }
                }else{
                    return state;
                };
            };//end  INCREASE_POST_VOTE_SCORE

        case 'DECREASE__COMMENT_VOTE_SCORE': 
        { const foundId = state.allIds.find((commentId) => commentId === action.id )
            if ( foundId ) {
                return {
                    ...state,
                    [byId]: {
                        ...state[byId],
                        [action.id]: {
                            ...state[byId][action.id],
                            voteScore: state[byId][action.id].voteScore -1
                        }
                    }
                }
            }else{
                return state;
            }
        }; //end DECREASE__COMMENT_VOTE_SCORE  

        default: 
            return state;
    }
}


export default commentsReducer;