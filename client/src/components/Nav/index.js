import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4, border-bottom">
                <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <span className="fs-4">Google Books Search</span>
                </a>
                <ul className="nav nav-pills">
                    <li className="nav-item"><Link to='/' className='nav-link'>Search</Link></li>
                    <li className="nav-item"><Link to='/saved' className='nav-link'>Saved</Link></li>
                </ul>
            </header>
        </div>
    )
}

export default Nav;