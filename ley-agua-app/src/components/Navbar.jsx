import React from 'react';

const Navbar = () => (
  <nav style={{
    width: '100%',
    background: '#1976d2',
    padding: '0.5em 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 32,
    position: 'sticky',
    top: 0,
    zIndex: 10,
    boxShadow: '0 2px 8px #1976d222'
  }}>
    <a href="https://diacua-viva.vercel.app/" target="_blank" rel="noopener noreferrer" style={navLinkStyle}>Inicio</a>
    <a href="https://diacuaviva.blogspot.com/2025/12/cuando-el-agua-deja-de-ser-un.html" target="_blank" rel="noopener noreferrer" style={navLinkStyle}>Blog</a>
    <a href="mailto:diacuaviva@gmail.com" style={navLinkStyle}>Contáctanos</a>
  </nav>
);

const navLinkStyle = {
  color: '#fff',
  fontWeight: 600,
  fontSize: '1.08em',
  textDecoration: 'none',
  letterSpacing: 0.5,
  padding: '0.3em 1.1em',
  borderRadius: 6,
  transition: 'background 0.2s, color 0.2s',
  background: 'transparent',
  display: 'inline-block',
};

export default Navbar;
