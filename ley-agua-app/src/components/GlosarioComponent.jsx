import React, { useState } from 'react';
import glosario from '../../data/glosario.json';

function GlosarioComponent() {
  const [open, setOpen] = useState(false);
  return (
    <section>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          textAlign: 'left',
          padding: '1em',
          background: '#f7f7f7',
          border: 'none',
          borderRadius: 6,
          fontWeight: 'bold',
          color: '#222',
          fontSize: '1.2em',
          cursor: 'pointer',
          marginBottom: open ? 0 : '1.5em',
          boxShadow: open ? '0 2px 8px #0001' : 'none'
        }}
        aria-expanded={open}
        aria-controls="glosario-content"
      >
        Glosario {open ? '▲' : '▼'}
      </button>
      {open && (
        <div id="glosario-content" style={{marginTop: 0, marginBottom: '2em'}}>
          <ul style={{listStyle: 'none', padding: 0}}>
            {glosario.map((item, idx) => (
              <li key={idx} style={{
                marginBottom: '1.5em',
                background: '#f7f7f7',
                borderRadius: 6,
                padding: '1em',
                border: '1px solid #ccc',
                color: '#222',
              }}>
                <strong style={{fontSize: '1.1em', color: '#222', display: 'block', marginBottom: 4}}>{item.t}</strong>
                <div style={{marginTop: 4, color: '#333', fontWeight: 500}}>{item.d}</div>
                {item.r && item.r.length > 0 && (
                  <div style={{fontSize: '0.95em', color: '#888', marginTop: 4}}>
                    Referencia: {item.r.join(', ')}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default GlosarioComponent;
