import React from 'react';
import { NavLink } from 'react-router-dom';
import './CSS/Header.css';
import logo from './Assets/logo.jpg';

const Header = () => {
    return  (
        <header className="header">
            <nav className="nav-container">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                    <h1 className="logo-title">IKN Working Site</h1>
                </div>
                <div className="nav-bar">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/Equipments">Equipments</NavLink>
                    <NavLink className="nav-link" to="/Schools&Teachers">Schools & Teachers</NavLink>
                    <NavLink className="nav-link" to="/Reports">Reports</NavLink>
                    <NavLink className="nav-link" to="/Gallery">Gallery</NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Header;