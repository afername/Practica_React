import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

class Navbar extends Component {
    onSearch(query) {
        this.props.onSearch(query.target.value)
    }

    render() {
        const { active } = this.props;

        return (
            <nav className="nav navbar navbar-expand-lg navbar-light bg-light">
                <Link className={`nav-link ${active === 'movies' ? 'navlink-active' : ''}`} to='/movies'>Top 10 Movies</Link>
                <Link className={`nav-link ${active === 'shows' ? 'navlink-active' : ''}`} to='/shows'>Top 10 TV Shows</Link>
                <input className="form-inline form-control mr-sm-2 search-input" type="search" placeholder="Search" aria-label="Search" onChange={(e) => this.onSearch(e)} />


            </nav>
        );
    }
}

export default Navbar;
