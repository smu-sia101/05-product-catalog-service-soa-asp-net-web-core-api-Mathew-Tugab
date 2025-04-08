import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Topbar.css';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';

const Topbar = () => {
    return (
        <nav className="topbar">
            <div className="topbar-logo">
                <h1>Welcome</h1>
            </div>
            <ul className="topbar-links">
                <li>
                    <Link to="/" className="topbar-link">
                        <HomeIcon className="icon" /> Home
                    </Link>
                </li>
                <li>
                    <Link to="/products" className="topbar-link">
                        <CategoryIcon className="icon" /> Products
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Topbar;