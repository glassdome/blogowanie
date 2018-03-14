//Filter Action Generators

//SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

//SORT_BY_DATE
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})
//SORT_BY_SCORE
export const sortByScore = () => ({
    type: 'SORT_BY_SCORE'
})

//SORT_BY_CATEGORY
export const sortByCategory = () => ({
    type: 'SORT_BY_CATEGORY'
})


//SET_START_DATE
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})
//SET_END_DATE
export const setEndDate = (endDate) => ({
    type: 'SET_End_DATE',
    endDate
})