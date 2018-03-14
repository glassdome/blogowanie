//Posts Reducer

const postsReducerDefaultState =  {
    byId: {
        "8xf0y6ziyjabvozdd253nd": {
            id: '8xf0y6ziyjabvozdd253nd',
            timestamp: 1467166872634,
            title: 'Udacity is the best place to learn React',
            body: 'Everyone says so after all.',
            author: 'thingtwo',
            category: 'react',
            voteScore: 6,
            deleted: false,
            commentCount: 2
          },
          "6ni6ok3ym7mf1p33lnez": {
            id: '6ni6ok3ym7mf1p33lnez',
            timestamp: 1468479767190,
            title: 'Learn Redux in 10 minutes!',
            body: 'Just kidding. It takes more than 10 minutes to learn technology.',
            author: 'thingone',
            category: 'redux',
            voteScore: -5,
            deleted: false,
            commentCount: 1
          },
          "6ni6ok3ym7mf1p555nez": {
            id: '6ni6ok3ym7mf1p555nez',
            timestamp: 1468479767190,
            title: 'Redux weekend course!',
            body: 'Learn the new technology on the weekend.',
            author: 'thingone',
            category: 'redux',
            voteScore: -20,
            deleted: false,
            commentCount: 0
          }
    },//end  byId 
    allIds:["8xf0y6ziyjabvozdd253nd", "6ni6ok3ym7mf1p33lnez", "6ni6ok3ym7mf1p555nez"]
} //end posts 

// const postsReducerDefaultState = {
//         byId: {},
//         allIds: []
// };


const postsReducer = (state = postsReducerDefaultState, action) => {
    const byId = 'byId';
    const allIds = 'allIds';

    switch (action.type) {
        case 'ADD_POST':
            return {
                ...state,
                [byId]: {
                    ...state[byId],
                    [action.post.id]: {
                    ...action.post
                    }
                },
                [allIds] : [...state[allIds], action.post.id ]
                }; //end ADD_POST


        case 'EDIT_POST':
            {const foundId = state.allIds.find( (post) => post=== action.id )
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
            };//end EDIT_POST


        case 'DELETE_POST': 
            { const foundId = state.allIds.find((postId) => postId === action.id )
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
        };//end DELETE_POST
          
        case 'INCREASE_POST_VOTE_SCORE': 
            { const foundId = state.allIds.find((postId) => postId === action.id )
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

        
        case 'DECREASE_POST_VOTE_SCORE': 
            {const findId = state.allIds.find((postId) => postId === action.id )
                if ( findId ) {
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
                };
            };//end DECREASE_POST_VOTE_SCORE 

        //update post's commentCount when a new comment is added
         case 'ADD_COMMENT':
         {  const postId = action.comment.parentId
             const foundId = state.allIds.find((id) => id === postId )
            if ( foundId ) {
                return {
                    ...state,
                    [byId]: {
                        ...state[byId],
                        [postId ]: {
                        ...state[byId][postId],
                        commentCount: state[byId][postId].commentCount + 1
                        }
                    } 
                }
            }else{
                return state;
            };
        };//end  ADD_COMMENT

        //update post's commentCount when a comment is deleted
        case 'DELETE_COMMENT':
        {  const postId = action.parentId
            const foundId = state.allIds.find((id) => id === postId )
           if ( foundId ) {
               return {
                   ...state,
                   [byId]: {
                       ...state[byId],
                       [postId ]: {
                       ...state[byId][postId],
                       commentCount: state[byId][postId].commentCount -1
                       }
                   } 
               }
           }else{
               return state;
           };
       };//end  ADD_COMMENT
            
        default: 
            return state;          
    }
}


export default postsReducer;