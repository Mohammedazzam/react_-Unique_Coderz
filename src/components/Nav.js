import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div className="navbar">
            <div className="container">
                <a href="#" className="logo">Logo</a>
                <ul>
                    {/* <Link to="/">Home</Link>
                    <Link to="/about">About</Link> */}


                    {/* <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} /> */}

                    <NavLink activeClassName="selected" exact to="/">Home</NavLink>
                    <NavLink activeClassName="selected" to="/about">About</NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Nav;