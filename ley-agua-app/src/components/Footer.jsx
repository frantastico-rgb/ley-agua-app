import React from 'react';
import mascota from '../assets/cisne-diacua-buque.png';
import logo from '../assets/logo.png';

const Footer = () => (
  <footer style={{
    marginTop: '3em',
    padding: '2em 0 1em 0',
    background: 'rgba(25, 118, 210, 0.08)',
    borderTop: '2px solid #1976d2',
    textAlign: 'center',
    fontSize: '1.05em',
    color: '#222',
    position: 'relative'
  }}>
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 24, flexWrap: 'wrap', marginBottom: 12}}>
      <a href="https://diacua-viva.vercel.app/" target="_blank" rel="noopener noreferrer" title="Agencia DIACUA VIVA">
        <img src={logo} alt="Logo DIACUA VIVA" style={{height: 48, verticalAlign: 'middle'}} />
      </a>
      <a href="mailto:diacuaviva@gmail.com" title="Email DIACUA VIVA" style={{color: '#1976d2', fontWeight: 600, textDecoration: 'none'}}>diacuaviva@gmail.com</a>
      <a href="https://diacuaviva.blogspot.com/2025/12/cuando-el-agua-deja-de-ser-un.html" target="_blank" rel="noopener noreferrer" title="Blog DIACUA VIVA" style={{color: '#1976d2', fontWeight: 600, textDecoration: 'none'}}>Blog</a>
      <a href="https://www.facebook.com/profile.php?id=61585225436715&locale=es_LA" target="_blank" rel="noopener noreferrer" title="Facebook DIACUA VIVA" style={{color: '#1976d2', fontWeight: 600, textDecoration: 'none'}}>
        <svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor" style={{verticalAlign: 'middle'}}><path d="M29 0h-26c-1.7 0-3 1.3-3 3v26c0 1.7 1.3 3 3 3h13v-12h-4v-5h4v-4c0-4.1 2.5-6.3 6.1-6.3 1.8 0 3.6.3 3.6.3v4h-2c-2 0-2.6 1.2-2.6 2.5v3h5l-1 5h-4v12h7c1.7 0 3-1.3 3-3v-26c0-1.7-1.3-3-3-3z"/></svg>
      </a>
      <a href="https://www.youtube.com/@DIACUAVIVA" target="_blank" rel="noopener noreferrer" title="YouTube DIACUA VIVA" style={{color: '#d32f2f', fontWeight: 600, textDecoration: 'none'}}>
        <svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor" style={{verticalAlign: 'middle'}}><path d="M31.6 8.3c-.4-1.6-1.7-2.9-3.3-3.3-2.9-.8-14.3-.8-14.3-.8s-11.4 0-14.3.8c-1.6.4-2.9 1.7-3.3 3.3-.8 2.9-.8 9-.8 9s0 6.1.8 9c.4 1.6 1.7 2.9 3.3 3.3 2.9.8 14.3.8 14.3.8s11.4 0 14.3-.8c1.6-.4 2.9-1.7 3.3-3.3.8-2.9.8-9 .8-9s0-6.1-.8-9zm-18.6 13.7v-9.4l8.2 4.7-8.2 4.7z"/></svg>
      </a>
      <a href="https://diacua-viva.vercel.app/" target="_blank" rel="noopener noreferrer" title="Agencia DIACUA VIVA">
        <img src={mascota} alt="Mascota Cisne DIACUA" style={{height: 44, verticalAlign: 'middle', marginLeft: 6, filter: 'drop-shadow(0 2px 6px #1976d2aa)', transition: 'transform 0.3s', cursor: 'pointer'}} className="mascota-cisne" />
      </a>
    </div>
    <div style={{fontSize: '0.98em', color: '#555'}}>
      © {new Date().getFullYear()} DIACUA VIVA — Cultura, creatividad y solidaridad por el agua.
    </div>
  </footer>
);

export default Footer;
