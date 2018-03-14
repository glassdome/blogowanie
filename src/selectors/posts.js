//returns array  with all posts
const getPosts = ( posts, category = undefined ) => {
    const postsAllIds = posts.allIds;
    const allPosts = postsAllIds.map((postId) => 
            posts.byId[postId] );
    
     if (!!category) {
       return  allPosts.filter((post) => {
        return (post.category.toLowerCase() == category.toLowerCase())
    })

     }else{
      return  allPosts
    };
}

export const getPost = ( posts, postId ) => {
    if (posts.allIds.find((id) => id === postId)){
        return posts.byId[postId]
    }
    return {};
}

export const getVisiblePosts = (posts, filters, category) => {

    const {text, sortBy, startDate, endeDate } = filters;
       
       return getPosts( posts, category ).filter(( post ) => {
           
           //tests whether post's title includes search text 
           const textMatch = post.title.toLowerCase().includes(text.toLowerCase());
   
            //if startDate (endDate) is not a number the first part of || will be true and
           // startDateMatch (endDateMatch) will be true and therefore will not effect the filtering
           const startDateMatch = typeof startDate !== 'number' || startDate >= post.timestamp;
           const endDateMatch = typeof endDate !== 'number' || endDate <= post.timestamp;
           const postNotDeleted = !post.deleted;
           
           return textMatch && startDateMatch && endDateMatch && postNotDeleted;
       }).sort((a, b) => {
           if( sortBy === 'date') {
               return a.timestamp < b.timestamp ? 1 : -1; //newest first
           }else if( sortBy === 'vote_score') {
               return a.voteScore < b.voteScore ? 1 : -1; //highest score first
           }else if( sortBy === 'category' ){
               return a.category > b.category ? 1 : -1;  //alphabetically
           }
       })
   }