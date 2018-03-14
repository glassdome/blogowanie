//Categories reducer
const categoriesReducerDefaultState = [
    {
        name:'Udacity',
        path: 'udacity'
    },
    {
        name:'React',
        path: 'react'
    },
    {
        name:'Redux',
        path: 'redux'
    },
];

const categoriesReducer = (state = categoriesReducerDefaultState, action) => {
    switch (action.type) {
         default: 
            return state;
    }
}

export default categoriesReducer;