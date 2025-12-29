import './App.css';
import FaqComponent from './components/FaqComponent';
import ResumenLeyAccordion from './components/ResumenLeyAccordion';
import FloatingSearch from './components/FloatingSearch';
import GlosarioComponent from './components/GlosarioComponent';
import ConceptosComponent from './components/ConceptosComponent';
import TimelineComponent from './components/TimelineComponent';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import React, { useState, useEffect } from 'react';

import mascota from './assets/cisne-diacua-buque.png';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [fontSize, setFontSize] = useState(() => {
    const saved = localStorage.getItem('fontSize');
    return saved ? parseInt(saved, 10) : 18;
  });

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
    document.body.style.fontSize = fontSize + 'px';
    localStorage.setItem('fontSize', fontSize);
  }, [darkMode, fontSize]);

  const handleFontSize = (delta) => {
    setFontSize(f => Math.max(14, Math.min(28, f + delta)));
  };

  return (
    <>
      {/* Switch de modo claro/oscuro y control de fuente en columna vertical */}
      <div style={{position: 'fixed', top: 18, right: 24, zIndex: 2000, display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-end'}}>
        <button
          onClick={() => setDarkMode(dm => !dm)}
          style={{
            background: darkMode ? '#fff' : '#1976d2',
            color: darkMode ? '#1976d2' : '#fff',
            border: '2px solid #1976d2',
            borderRadius: 16,
            padding: '0.2em 0.7em',
            fontWeight: 'bold',
            fontSize: '1.1em',
            cursor: 'pointer',
            boxShadow: '0 2px 8px #0002',
            transition: 'all 0.2s',
            minWidth: 36,
            minHeight: 36,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          aria-label={darkMode ? 'Modo claro' : 'Modo oscuro'}
        >
          {darkMode ? (
            <span title="Modo claro" style={{display: 'flex', alignItems: 'center'}}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1976d2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            </span>
          ) : (
            <span title="Modo oscuro" style={{display: 'flex', alignItems: 'center'}}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/></svg>
            </span>
          )}
        </button>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#fff', borderRadius: 16, padding: '0.2em 0.4em', border: '2px solid #1976d2', minWidth: 36}}>
          <button onClick={() => handleFontSize(2)} style={{fontSize: 16, background: 'none', border: 'none', color: '#1976d2', cursor: 'pointer', fontWeight: 'bold', minWidth: 28, minHeight: 28}} aria-label="Aumentar tamaño de fuente">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1976d2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
          </button>
          <span style={{fontSize: 13, color: '#1976d2', fontWeight: 'bold', minWidth: 24, textAlign: 'center'}}>{fontSize}px</span>
          <button onClick={() => handleFontSize(-2)} style={{fontSize: 16, background: 'none', border: 'none', color: '#1976d2', cursor: 'pointer', fontWeight: 'bold', minWidth: 28, minHeight: 28}} aria-label="Reducir tamaño de fuente">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1976d2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
          </button>
        </div>
      </div>
      {/* Landmark de navegación principal */}
      <Navbar />
      <main role="main" id="main-content" style={{maxWidth: 700, margin: '0 auto', padding: '2em'}}>
        <Header />
        <div style={{position: 'relative', marginBottom: '1.2em'}}>
          <h1 style={{textAlign: 'center', marginTop: 0, marginBottom: '1em'}} id="titulo-principal">
            Ley de Comunidades del Agua
          </h1>
          <img 
            src={mascota} 
            alt="Mascota Cisne DIACUA" 
            className="mascota-cisne"
            style={{
              position: 'absolute',
              right: -10,
              top: '50%',
              transform: 'translateY(-50%)',
              width: 70,
              height: 'auto',
              filter: 'drop-shadow(0 2px 6px #1976d2aa)',
              transition: 'transform 0.3s, filter 0.3s',
              cursor: 'pointer',
              zIndex: 2
            }}
          />
        </div>
        <h2 style={{textAlign: 'center', margin: '0 0 1.1em 0', fontWeight: 700, fontSize: '1.35em', color: '#fff'}} id="resumen-ley-titulo">
          Resumen Proyecto Ley 149 de 2024
        </h2>
        <div style={{display: 'flex', justifyContent: 'center', marginBottom: '2em'}}>
          <div style={{width: '100%', maxWidth: 560, borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 24px #1976d244'}}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/D595_T74eS8"
              title="Video DIACUA VIVA - Cultura del Agua"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{width: '100%', height: 315, display: 'block', background: '#000'}}
            ></iframe>
          </div>
        </div>
        {/* Región de contenido dinámico con aria-live para mensajes de estado */}
        <div aria-live="polite" aria-atomic="true" id="status-message" style={{position: 'absolute', left: '-9999px', height: 1, width: 1, overflow: 'hidden'}}>Contenido actualizado</div>
        <ResumenLeyAccordion />
        <ConceptosComponent />
        <TimelineComponent />
        <GlosarioComponent />
        <FaqComponent />
        <Footer />
      </main>
      {/* Landmark de búsqueda flotante */}
      <FloatingSearch />
      {/* Estilos globales para modo claro/oscuro */}
      <style>{`
        body.dark-mode {
          background: #222 !important;
          color: #fff !important;
        }
        body.light-mode {
          background: #fff !important;
          color: #222 !important;
        }
        .dark-mode .acordeon-azul {
          background: #1976d2 !important;
          color: #fff !important;
        }
        .light-mode .acordeon-azul {
          background: #1976d2 !important;
          color: #fff !important;
        }
        .dark-mode .acordeon-gris {
          background: #f7f7f7 !important;
          color: #222 !important;
        }
        .light-mode .acordeon-gris {
          background: #f7f7f7 !important;
          color: #222 !important;
        }
      `}</style>
    </>
  );
}

export default App;
