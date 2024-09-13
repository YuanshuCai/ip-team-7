import React from "react";
import { useState } from "react";
import './NavBar.scss';

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('Theme packs');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <nav className="nav-bar">
          <div className="nav-bar__links">
            {['Theme packs', 'Channels', 'Premium'].map((link) => (
              <div
                key={link}
                className={`nav-bar__link ${link === activeLink ? 'nav-bar__link--active' : ''}`}
                onClick={() => handleLinkClick(link)}
              >
                {link}
              </div>
            ))}
          </div>
        </nav>
      );
    };


export default NavBar; 