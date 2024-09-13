import React from "react";
import { useState } from "react";
import './NavBar.scss';
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
    const location = useLocation()

    const routes = [
      {
        route: '/',
        label: 'Theme packs'
      },
      {
        route: '/channel',
        label: 'Channels'
      },
      {
        route: '/premiums',
        label: 'Premiums'
      },
    ]
  
    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    console.log(location.pathname);

    return (
        <nav className="nav-bar">
          <div className="nav-bar__links">
            {routes.map((link) => (
              <Link to={link.route} key={link.label} className={`nav-bar__link ${link.route === '/' ? link.route === location.pathname ? 'nav-bar__link--active' : '' : location.pathname.startsWith(link.route) ? 'nav-bar__link--active' : ''}`}>
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      );
    };


export default NavBar; 