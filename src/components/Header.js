
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
    		<h1>Readable</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>|
        <NavLink to="/posts" activeClassName="is-active" exact={true}>Posts</NavLink>|
        <NavLink to="/add/post" activeClassName="is-active">Submit Post</NavLink>|
        <NavLink to="/categories" activeClassName="is-active">Categories</NavLink>
    </header>
)

export default Header;