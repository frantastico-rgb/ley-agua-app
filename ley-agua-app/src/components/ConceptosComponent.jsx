import React from 'react';
import conceptos from '../../data/conceptos.json';

const colorMap = {
  blue: '#1976d2',
  cyan: '#00bcd4',
  green: '#43a047',
  purple: '#8e24aa',
  default: '#222'
};

function ConceptosComponent() {
  return (
    <section aria-label="Conceptos Clave">
      <h2>Conceptos Clave</h2>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '1em', marginTop: '1em'}}>
        {conceptos.map(con => (
          <article key={con.id} style={{
            flex: '1 1 180px',
            minWidth: 180,
            background: '#f7f7f7',
            borderRadius: 8,
            padding: '1em',
            border: '1px solid #ccc',
            color: colorMap[con.c] || colorMap.default,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: '0 2px 8px #0001'
          }}>
            <span style={{fontSize: '2em', marginBottom: 8}}>{con.ic}</span>
            <strong style={{fontSize: '1.1em', marginBottom: 4, color: colorMap[con.c] || colorMap.default}}>{con.t}</strong>
            <div style={{color: '#333', fontWeight: 500}}>{con.d}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ConceptosComponent;
