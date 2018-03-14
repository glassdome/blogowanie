//Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date', //or vote_score, categories
    startDate: undefined,
    endeDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        
        case 'SET_TEXT_FILTER': 
            return {
                ...state,
                text: action.text
            };

        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };

        case 'SORT_BY_SCORE':
            return {
                ...state,
                sortBy: 'vote_score'
            };

        case 'SORT_BY_CATEGORY':
            return {
                ...state,
                sortBy: 'category'
            };
        
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        
        case 'SET_END_DATE':
            return {
                ...state,
                startDate: action.endDate
            }    

        
        default: 
            return state;
    }
}

export default filtersReducer;