import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <div className='logo'>Mateusz Mańczak</div>
      <ul className='navlist'>
        <li>O mnie</li>
        <li>Poziom</li>
        <li>Cennik</li>
        <li>Kontakt</li>
      </ul>
    </header>
  );
};

export default Header;
