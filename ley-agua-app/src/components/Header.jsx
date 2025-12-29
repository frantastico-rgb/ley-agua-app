import React from 'react';
import logo from '../assets/logo.png';
import mascota from '../assets/cisne-diacua-buque.png';


const Header = () => (
  <header role="banner" aria-label="Encabezado principal" style={{
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5em', position: 'relative', minHeight: 180
  }}>
    <img src={logo} alt="Logo DIACUA VIVA" style={{ width: 180, margin: '0 auto 0.5em auto', display: 'block' }} />
    <h2 style={{position: 'absolute', left: '-9999px', height: 1, width: 1, overflow: 'hidden'}}>DIACUA VIVA</h2>
  </header>
);

export default Header;
