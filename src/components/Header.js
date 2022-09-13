import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { navItems } from './Menu';
import * as Icons from 'react-icons/fa';
import './CSS/Header.css';
import logo from './Assets/logo.png';

const Header = () => {
    const [mobile, setMobile] = useState(false);
    const [sidebar, setSidebar] = useState(false);
  
    useEffect(() => {
        if (window.innerWidth < 768) {
            setMobile(true);
        }
    }, []);
  
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setMobile(true);
            } else {
                setMobile(false);
                setSidebar(false);
            }
        };
  
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
  
    return (
        <>
            <nav className="navbar">
                <Link to="/" className="navbar-logo" onClick={() => setSidebar(false)}>
                    <img src={logo} alt="camara logo"  className="logo"/>
                </Link>
                {!mobile && (
                    <ul className="nav-items active">
                        {navItems.map((item) => {
                            return (
                                <li key={item.id} className={item.nName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                )}
  
                {mobile && (
                    <div>
                        <div className="sidebar-toggle">
                            {sidebar ? (
                                <Icons.FaTimes
                                    className="sidebar-toggle-logo"
                                    onClick={() => setSidebar(!sidebar)}
                                />
                            ) : (
                                <Icons.FaBars
                                    className="sidebar-toggle-logo"
                                    onClick={() => setSidebar(!sidebar)}
                                />
                            )}
                        </div>
                    </div>
                )}
            </nav>

            <div className={sidebar ? 'sidebar active' : 'sidebar'}>
                <ul className="sidebar-items">
                    {navItems.map((item) => {
                        return (
                            <li
                                key={item.id}
                                className={item.sName}
                                onClick={() => setSidebar(false)}
                            >
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
            
        </>
    );
};

export default Header;