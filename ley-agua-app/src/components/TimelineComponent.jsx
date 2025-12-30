import React, { useState } from 'react';
import timeline from '../../data/timeline.json';

const colorList = [
  '#1976d2', '#00bcd4', '#43a047', '#8e24aa', '#ff9800', '#e53935'
];

function TimelineComponent() {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  function handleToggle() {
    setOpen(o => {
      setStatusMsg(!o ? 'Línea de tiempo expandida' : 'Línea de tiempo colapsada');
      return !o;
    });
  }

  return (
    <section aria-label="Línea de Tiempo" style={{marginBottom: '2em', position: 'relative'}}>
      {/* Mensaje accesible para lectores de pantalla */}
      <div aria-live="polite" aria-atomic="true" style={{position: 'absolute', left: '-9999px', height: 1, width: 1, overflow: 'hidden'}}>{statusMsg}</div>
      <div
        style={{
          background: '#222',
          color: '#ffe082',
          borderRadius: 8,
          cursor: 'pointer',
          padding: '1.2em 1em',
          fontWeight: 700,
          fontSize: '1.3em',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: open ? '0 2px 12px #0002' : '0 1px 4px #0001',
          border: open ? '2px solid #1976d2' : '2px solid transparent',
          transition: 'all 0.2s',
          position: 'relative',
        }}
        onClick={handleToggle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        aria-expanded={open}
        aria-controls="timeline-content"
        tabIndex={0}
        id="timeline-accordion-btn"
        title="Haz click para ver la línea de tiempo"
        role="button"
      >
        <span>Línea de Tiempo</span>
        <span style={{fontSize: '1.2em', marginLeft: 8}}>{open ? '▲' : '▼'}</span>
        {(!open && hover) && (
          <span style={{
            position: 'absolute',
            right: 40,
            top: '100%',
            background: '#333',
            color: '#fff',
            padding: '0.4em 0.8em',
            borderRadius: 6,
            fontSize: '0.95em',
            marginTop: 4,
            boxShadow: '0 2px 8px #0003',
            zIndex: 10
          }}>
            Haz click para desplegar la línea de tiempo
          </span>
        )}
      </div>
      {open && (
        <div id="timeline-content" role="region" aria-labelledby="timeline-accordion-btn" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2em'}}>
          {timeline.map((item, idx) => (
            <div key={item.f} style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: idx < timeline.length - 1 ? '2em' : 0,
              position: 'relative',
              width: '100%'
            }}>
              <div style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: colorList[idx % colorList.length],
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '1.1em',
                marginRight: 16,
                flexShrink: 0
              }}>{item.f}</div>
              <div style={{background: '#f7f7f7', borderRadius: 6, padding: '1em', border: '1px solid #ccc', minWidth: 200, flex: 1}}>
                <strong style={{fontSize: '1.1em', color: colorList[idx % colorList.length]}}>{item.t}</strong>
                <div style={{color: '#333', marginTop: 4}}>{item.dur}</div>
                <div style={{fontSize: '0.95em', color: '#888', marginTop: 4}}>Referencia: {item.a}</div>
              </div>
              {idx < timeline.length - 1 && (
                <div style={{
                  position: 'absolute',
                  left: 16,
                  top: 32,
                  width: 2,
                  height: '2em',
                  background: colorList[(idx+1) % colorList.length],
                  zIndex: 0
                }} />
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default TimelineComponent;
