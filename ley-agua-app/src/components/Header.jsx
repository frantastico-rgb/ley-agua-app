import React from 'react';
import logo from '../assets/logo.png';
import mascota from '../assets/cisne-diacua-buque.png';


const Header = () => (
  <header style={{
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5em', position: 'relative', minHeight: 180
  }}>
    <img src={logo} alt="Logo DIACUA VIVA" style={{ width: 180, margin: '0 auto 0.5em auto', display: 'block' }} />
  </header>
);

export default Header;
