import React, { useState, useEffect, useRef } from 'react';
import conceptos from '../../data/conceptos.json';
import faqs from '../../data/faqs.json';
import glosario from '../../data/glosario.json';

const FloatingSearch = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [showReturn, setShowReturn] = useState(false);
  const lastScroll = useRef(null);

  // Mostrar botón regresar si el usuario hace scroll hacia abajo
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 120) {
        setShowReturn(true);
      } else {
        setShowReturn(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Unificar datos de conceptos, faqs y glosario
  const conceptosData = conceptos.map(c => ({
    tipo: 'concepto',
    titulo: c.t,
    descripcion: c.d
  }));

  const faqsData = faqs.map(f => ({
    tipo: 'faq',
    titulo: f.q,
    descripcion: f.a
  }));

  const glosarioData = glosario.map(g => ({
    tipo: 'glosario',
    titulo: g.t,
    descripcion: g.d
  }));

  const data = [...conceptosData, ...faqsData, ...glosarioData];

  const filtered = data.filter(item => {
    const matchesQuery =
      item.titulo.toLowerCase().includes(query.toLowerCase()) ||
      item.descripcion.toLowerCase().includes(query.toLowerCase());
    const matchesFilter = filter === 'all' || item.tipo === filter;
    return matchesQuery && matchesFilter;
  });

  // Scroll automático a la sección correspondiente
  const scrollToSection = tipo => {
    let sectionId = '';
    if (tipo === 'concepto') sectionId = 'conceptos';
    else if (tipo === 'faq') sectionId = 'faqs';
    else if (tipo === 'glosario') sectionId = 'glosario';
    else sectionId = '';
    if (sectionId) {
      lastScroll.current = window.scrollY;
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setOpen(false);
      }
    }
  };

  // Función para regresar a la posición anterior o al inicio
  const handleReturn = () => {
    if (lastScroll.current !== null) {
      window.scrollTo({ top: lastScroll.current, behavior: 'smooth' });
      lastScroll.current = null;
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Estado para mensaje accesible
  const [statusMsg, setStatusMsg] = useState('');

  // Actualizar mensaje accesible cuando cambian los resultados
  useEffect(() => {
    if (!open) return;
    if (query.trim() === '') {
      setStatusMsg('');
    } else if (filtered.length === 0) {
      setStatusMsg('Sin resultados encontrados');
    } else {
      setStatusMsg(`${filtered.length} resultado${filtered.length === 1 ? '' : 's'} encontrado${filtered.length === 1 ? '' : 's'}`);
    }
  }, [filtered.length, query, open]);

  return (
    <>
      {/* Botón flotante Regresar */}
      {showReturn && (
        <button
          className="floating-return-btn"
          onClick={handleReturn}
          aria-label="Regresar"
        >
          ⬆️ Regresar
        </button>
      )}

      {/* Botón flotante de búsqueda */}
      <button
        className="floating-search-btn"
        onClick={() => setOpen(!open)}
        aria-label="Buscar"
      >
        <span role="img" aria-label="lupa" style={{ fontSize: 24 }}>🔍</span>
      </button>

      {/* Panel de búsqueda */}
      {open && (
        <div className="floating-search-panel" role="dialog" aria-modal="true" aria-label="Panel de búsqueda">
          {/* Mensaje accesible para lectores de pantalla */}
          <div aria-live="polite" aria-atomic="true" style={{position: 'absolute', left: '-9999px', height: 1, width: 1, overflow: 'hidden'}}>{statusMsg}</div>
          <div className="floating-search-header">
            <input
              type="text"
              placeholder="Buscar..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              autoFocus
              aria-label="Buscar término o palabra"
            />
            <select value={filter} onChange={e => setFilter(e.target.value)} aria-label="Filtrar por tipo">
              <option value="all">Todos</option>
              <option value="concepto">Conceptos</option>
              <option value="faq">FAQs</option>
              <option value="glosario">Glosario</option>
            </select>
            <button onClick={() => setOpen(false)} aria-label="Cerrar">✖️</button>
          </div>
          <div className="floating-search-results">
            {filtered.length === 0 ? (
              <div className="no-results">Sin resultados</div>
            ) : (
              <ul>
                {filtered.map((item, idx) => (
                  <li
                    key={idx}
                    style={{marginBottom: 12, cursor: 'pointer'}}
                    onClick={() => scrollToSection(item.tipo)}
                    title={`Ir a la sección de ${item.tipo}`}
                    tabIndex={0}
                    aria-label={`Ir a la sección de ${item.tipo}: ${item.titulo}`}
                  >
                    <b style={{textTransform: 'capitalize'}}>{item.tipo}:</b> <span style={{fontWeight: 600}}>{item.titulo}</span>
                    <div style={{marginLeft: 8, marginTop: 2}}>{item.descripcion}</div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}

      {/* Estilos en línea para ejemplo rápido */}
      <style>{`
        .floating-search-btn {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 1000;
          background: #1976d2;
          color: #fff;
          border: none;
          border-radius: 50%;
          width: 56px;
          height: 56px;
          box-shadow: 0 2px 8px #0003;
          cursor: pointer;
          font-size: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        .floating-search-btn:hover {
          background: #1565c0;
        }
        .floating-return-btn {
          position: fixed;
          bottom: 90px;
          right: 24px;
          z-index: 1002;
          background: #fff;
          color: #1976d2;
          border: none;
          border-radius: 24px;
          padding: 0.6em 1.2em;
          font-size: 1.1em;
          font-weight: bold;
          box-shadow: 0 2px 8px #0003;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .floating-return-btn:hover {
          background: #1976d2;
          color: #fff;
        }
        .floating-search-panel {
          position: fixed;
          bottom: 90px;
          right: 24px;
          width: 320px;
          background: #222;
          color: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 24px #0006;
          z-index: 1001;
          padding: 1em;
          animation: fadeIn 0.2s;
        }
        .floating-search-header {
          display: flex;
          gap: 0.5em;
          align-items: center;
        }
        .floating-search-header input {
          flex: 1;
          padding: 0.5em;
          border-radius: 6px;
          border: none;
        }
        .floating-search-header select {
          padding: 0.4em;
          border-radius: 6px;
          border: none;
        }
        .floating-search-header button {
          background: none;
          border: none;
          color: #fff;
          font-size: 1.2em;
          cursor: pointer;
        }
        .floating-search-results {
          margin-top: 1em;
          max-height: 200px;
          overflow-y: auto;
        }
        .no-results {
          color: #bbb;
          text-align: center;
        }
        .floating-search-results li:hover {
          background: #1976d233;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default FloatingSearch;
