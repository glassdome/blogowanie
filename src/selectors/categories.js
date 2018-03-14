export const getLink = (path) => {
  switch (path){
    case 'react' :
      return  'https://reactjs.org/';

    case 'redux': 
      return 'https://redux.js.org/';
    
    case 'udacity':
      return 'https://www.udacity.com/';
    default:
      return ''; 
  }
}