import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLink } from '../selectors/categories';


const CategoriesList = (props) => (
  <div>
   {props.categories.map((category) => {
      const link = getLink(category.path)
      return (
          <div>
            <Link to={`/posts/category/${category.name}`}>{category.name}</Link>
            <p><a href={link}>{link}</a></p>
          </div>
        )
      }) 
   }
  </div>  
);




const mapStateToProps = (state) => ({
    categories: state.categories
})

export default connect(mapStateToProps)(CategoriesList);