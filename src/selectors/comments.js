//Returns either all comments or for parent post
 const getComments = ( comments, parentPostId = undefined ) => {
    const commentsAllIds = comments.allIds;

    const allComments = commentsAllIds.map((commentId) => 
        comments.byId[commentId]
    );
    //if parentPostId is undefined return all comments 
    //otherwhise comments onlyfor parent post
    return !!parentPostId  
    ? allComments.filter((comment) =>  comment.parentId === parentPostId ) 
    : allComments

};


//Returns filtered and sorted comments. If parentPostId is passed, only the
//comments for the parentPostId are returned
export const getVisibleComments = (comments, filters, parentPostId = undefined ) => {

    const {text, sortBy} = filters;
    //console.log('postId', parentPostId);
   // console.log(getComments(comments,parentPostId));

       return getComments( comments, parentPostId ).filter(( comment ) => {
            //tests whether comment's body includes search text 
           const textMatch = comment.body.toLowerCase().includes(text.toLowerCase());
           const commentNotDeleted = !comment.deleted;
           return textMatch && commentNotDeleted;
        }).sort((a, b) => {
           if( sortBy === 'date') {
               return a.timestamp < b.timestamp ? 1 : -1; //newest first
           }else if( sortBy === 'vote_score') {
               return a.voteScore < b.voteScore ? 1 : -1; //highest score first
           }
       })//end sort
   }

export  const getComment = (comments, commentId) => {
        return getComments(comments).find((comment) => comment.id === commentId)
   }