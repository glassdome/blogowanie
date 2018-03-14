import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByScore } from '../actions/filters';

const ListFilters = (props) => (
    <div>
      <input type="text" 
        placeholder="search posts" 
        value={props.filters.text} 
        onChange={(e) => {  
          props.dispatch( setTextFilter( e.target.value ));  
      }}/>

      <select 
        value={props.filters.sortBy}
        onChange={(e) => {
          if (e.target.value === "date"){
              props.dispatch(sortByDate());
          }else if (e.target.value === "vote_score"){
              props.dispatch(sortByScore());
          }
        }}
      >
        <option value="date" selected="selected">Date</option>
        <option value="vote_score">Vote Score</option>
      </select> 
    </div>
);


const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
};

export default  connect(mapStateToProps)(ListFilters);