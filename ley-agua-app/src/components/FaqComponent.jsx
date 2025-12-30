import React, { useState } from 'react';
import faqs from '../../data/faqs.json';

function FaqComponent() {
  const [open, setOpen] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  function handleToggle() {
    setOpen(o => {
      setStatusMsg(!o ? 'Preguntas frecuentes expandidas' : 'Preguntas frecuentes colapsadas');
      return !o;
    });
  }

  return (
    <section aria-label="Preguntas Frecuentes" style={{position: 'relative'}}>
      {/* Mensaje accesible para lectores de pantalla */}
      <div aria-live="polite" aria-atomic="true" style={{position: 'absolute', left: '-9999px', height: 1, width: 1, overflow: 'hidden'}}>{statusMsg}</div>
      <button
        onClick={handleToggle}
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
        aria-controls="faq-content"
        id="faq-accordion-btn"
      >
        Preguntas Frecuentes {open ? '▲' : '▼'}
      </button>
      {open && (
        <div id="faq-content" role="region" aria-labelledby="faq-accordion-btn" style={{marginTop: 0, marginBottom: '2em'}}>
          <ul style={{listStyle: 'none', padding: 0}}>
            {faqs.map(faq => (
              <li key={faq.id} style={{marginBottom: '1.5em', background: '#f7f7f7', borderRadius: 6, padding: '1em', border: '1px solid #ccc', color: '#222'}}>
                <strong style={{fontSize: '1.05em'}}>{faq.q}</strong>
                <div style={{marginTop: 4, color: '#333'}}>{faq.a}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default FaqComponent;
