import React, { useState } from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`nav ${isMenuOpen ? 'show' : ''}`} id="nav-menu">
      <div className="nav__content container">
        <div className="nav__perfil">
          <div className="nav__img">
            <img
              src="https://media.licdn.com/dms/image/D4D03AQHMtT-fZrDw3w/profile-displayphoto-shrink_800_800/0/1718314574110?e=1724889600&v=beta&t=utm1UiJ2VHAiZ6yZ3OSnv29EMt43CV8GhbKcbDBRX4Q"
              alt="Profile"
            />
          </div>
          <div>
            <p className="nav__name">Meu Sistema de Produtos</p>
          </div>
        </div>
        <ul className="nav__menu">
          <li className="nav__item">
            <a
              href="https://www.linkedin.com/in/lucianogis/"
              className="nav__link"
              onClick={handleCloseMenu}
            >
              Contato
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
