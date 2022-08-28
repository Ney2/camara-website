import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return  (
        <header>
            <nav>
                <div>
                    <img src="" alt="logo"/>
                    <h1>IKN Working Site</h1>
                </div>
                <div>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/Equipments">Equipments</NavLink>
                    <NavLink to="/Schools&Teachers">Schools & Teachers</NavLink>
                    <NavLink to="/Reports">Reports</NavLink>
                    <NavLink to="/Gallery">Gallery</NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Header;