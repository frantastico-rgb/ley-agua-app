import React, { useState } from 'react';

import resumenData from '../../data/resumen_ley_149_2024.json';


function ResumenLeyAccordion() {
  const bloques = resumenData;
  const [openIndex, setOpenIndex] = useState(null);
  const [openSub, setOpenSub] = useState(null);
  // Mensaje accesible para lectores de pantalla
  const [statusMsg, setStatusMsg] = useState('');
  // Subacordeones para el primer bloque
  const primerBloque = bloques[0];
  // Extraer los textos de cada título
  const contenido = primerBloque.contenido;
  // Dividir por los títulos
  const secciones = [
    {
      titulo: 'TÍTULO I: DISPOSICIONES GENERALES',
      color: '#1976d2',
      fondo: '#e3f2fd',
      contenido: `
        <div style="display: flex; flex-direction: column; gap: 0.2em;">
          <div style="padding: 0.1em 0; border-bottom: 1px solid #b3c6e0;"><b>Objeto</b> (Art. 1): Regular y fortalecer a las comunidades gestoras del agua y el manejo de aguas residuales.</div>
          <div style="padding: 0.1em 0; border-bottom: 1px solid #b3c6e0;"><b>Principios</b> (Art. 2): Responsabilidad estatal y autonomía comunitaria. Participación y transparencia en la gestión. Equidad y coordinación entre actores.</div>
          <div style="padding: 0.1em 0; border-bottom: 1px solid #b3c6e0;"><b>Enfoques</b> (Art. 3): Derechos humanos al agua y saneamiento. Atención a diversidad (etnia, género, territorio).</div>
          <div style="padding: 0.1em 0;"><b>Definiciones clave</b> (Art. 4): Gestión comunitaria: modelo solidario y democrático para el acceso y protección del agua. Comunidades gestoras: organizaciones sin ánimo de lucro que cooperan para la gestión del agua.</div>
        </div>
      `
    },
    {
      titulo: 'TÍTULO II: COMUNIDADES GESTORAS DEL AGUA',
      color: '#388e3c',
      fondo: '#e8f5e9',
      contenido: `
        <div style="display: flex; flex-direction: column; gap: 0.2em;">
          <div style="padding: 0.1em 0; border-bottom: 1px solid #b3e6c6;"><b>Naturaleza jurídica</b> (Art. 5): Asociaciones sin ánimo de lucro o Juntas de Acción Comunal, con patrimonio propio.</div>
          <div style="padding: 0.1em 0; border-bottom: 1px solid #b3e6c6;"><b>Requisitos para reconocimiento</b> (Art. 5-6): Incluir la gestión comunitaria del agua en su objeto social. Usar la denominación “Comunidad Gestora del Agua (C.G.A)” en su nombre. Estar inscrita en el SIGCA.</div>
          <div style="padding: 0.1em 0; border-bottom: 1px solid #b3e6c6;"><b>Vigilancia y control</b> (Art. 5): Régimen especial y diferenciado, adaptado a la naturaleza comunitaria.</div>
          <div style="padding: 0.1em 0;"><b>Registro</b> (Art. 6): A cargo de la Gobernación o Alcaldía Mayor, con requisitos básicos de constitución y área de gestión.</div>
        </div>
      `
    },
    {
      titulo: 'TÍTULO III: GESTIÓN AMBIENTAL COMUNITARIA',
      color: '#8e24aa',
      fondo: '#f3e5f5',
      contenido: `
        <div style="display: flex; flex-direction: column; gap: 0.2em;">
          <div style="padding: 0.1em 0; border-bottom: 1px solid #e0b3e6;"><b>Áreas estratégicas</b> (Art. 7): Se protege el agua y se excluyen actividades mineras o de hidrocarburos en zonas de conservación.</div>
          <div style="padding: 0.1em 0; border-bottom: 1px solid #e0b3e6;"><b>Comités municipales</b> (Art. 8): Instancias para coordinar la gestión y conservación de microcuencas y acuíferos.</div>
          <div style="padding: 0.1em 0; border-bottom: 1px solid #e0b3e6;"><b>Mapas de riesgo</b> (Art. 9): Municipios y autoridades deben identificar riesgos y proponer soluciones para el abastecimiento y calidad del agua.</div>
          <div style="padding: 0.1em 0;"><b>Concesiones</b> (Art. 10): Prioridad y condiciones especiales para las solicitudes de las comunidades gestoras, con duración mínima de 20 años.</div>
        </div>
      `
    }
  ];
  // Contador visual para alternancia
  let visualIdx = 1;

  // Actualizar mensaje accesible cuando se expande/colapsa
  function handleAccordion(idx, titulo) {
    setOpenIndex(openIndex === idx ? null : idx);
    setStatusMsg(openIndex === idx ? `Sección ${titulo} colapsada` : `Sección ${titulo} expandida`);
  }
  function handleSubAccordion(i, titulo) {
    setOpenSub(openSub === i ? null : i);
    setStatusMsg(openSub === i ? `Subsección ${titulo} colapsada` : `Subsección ${titulo} expandida`);
  }

  return (
    <section aria-label="Resumen del Proyecto de Ley" style={{position: 'relative'}}>
      {/* Mensaje accesible para lectores de pantalla */}
      <div aria-live="polite" aria-atomic="true" style={{position: 'absolute', left: '-9999px', height: 1, width: 1, overflow: 'hidden'}}>{statusMsg}</div>
      <h2>Resumen Proyecto Ley 149 de 2024</h2>
      <div>
        {/* Primer bloque con subacordeones */}
        <div style={{marginBottom: '0.2em', border: '2px solid #1976d2', borderRadius: 8, background: '#fff'}}>
          <button
            style={{
              width: '100%',
              textAlign: 'left',
              padding: '1.1em',
              background: '#fff',
              border: 'none',
              borderRadius: 8,
              fontWeight: 'bold',
              color: '#222',
              fontSize: '1.15em',
              cursor: 'pointer',
              letterSpacing: 0.5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
            aria-expanded={openIndex === 0}
            aria-controls="panel-primer-bloque"
            id="accordion-primer-bloque"
            onClick={() => handleAccordion(0, primerBloque.titulo)}
          >
            <span>{primerBloque.titulo}</span>
            <span style={{transition: 'transform 0.2s', transform: openIndex === 0 ? 'rotate(90deg)' : 'rotate(0deg)'}}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1565c0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </span>
          </button>
          {openIndex === 0 && (
            <div id="panel-primer-bloque" role="region" aria-labelledby="accordion-primer-bloque" style={{padding: '0.3em 0.3em 0.05em 0.3em', background: '#f7f7f7', borderRadius: 8}}>
              {secciones.map((sec, i) => (
                <div key={i} style={{marginBottom: '0.15em', border: `1.5px solid ${sec.color}`, borderRadius: 7, background: sec.fondo}}>
                  <button
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '0.9em',
                      background: (i % 2 === 0) ? '#1976d2' : '#fff',
                      border: 'none',
                      borderRadius: 7,
                      fontWeight: 'bold',
                      color: (i % 2 === 0) ? '#fff' : '#1976d2',
                      fontSize: '1.05em',
                      cursor: 'pointer',
                      letterSpacing: 0.5,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                    aria-expanded={openSub === i}
                    aria-controls={`panel-sub-${i}`}
                    id={`accordion-sub-${i}`}
                    onClick={() => handleSubAccordion(i, sec.titulo)}
                  >
                    <span>{sec.titulo}</span>
                    <span style={{transition: 'transform 0.2s', transform: openSub === i ? 'rotate(90deg)' : 'rotate(0deg)'}}>
                      {/* Flecha blanca o azul oscuro */}
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={(i % 2 === 0) ? '#fff' : '#1565c0'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                    </span>
                  </button>
                  {openSub === i && (
                    <div id={`panel-sub-${i}`} role="region" aria-labelledby={`accordion-sub-${i}`} style={{
                      padding: '0.3em 0.4em 0.05em 0.4em',
                      background: sec.fondo,
                      color: '#222',
                      borderRadius: 7,
                      textAlign: 'justify',
                      fontSize: '1.01em',
                      lineHeight: 1.35
                    }}>
                      <div
                        style={{whiteSpace: 'pre-wrap', color: '#222', background: 'inherit', fontFamily: 'inherit', margin: 0, textAlign: 'justify'}}
                        dangerouslySetInnerHTML={{ __html: formatContenido(sec.contenido) }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Resto de bloques normales */}
        {bloques.slice(1).map((bloque, idx) => {
          // Alternancia global
          const isOdd = visualIdx % 2 === 1;
          const bgColor = isOdd ? '#1976d2' : '#f7f7f7';
          const textColor = isOdd ? '#fff' : '#222';
          const arrowColor = isOdd ? '#fff' : '#1565c0';
          const thisIdx = visualIdx;
          // Preguntas especiales
          let preguntas = null;
          if (bloque.titulo === 'Preguntas Básicas') {
            preguntas = [
              {
                q: '¿Qué es una Comunidad Gestora del Agua?',
                a: 'Una Comunidad Gestora del Agua (C.G.A) es una organización que presta comunitariamente el servicio de agua, debe incluir esta denominación en su razón social, y estar inscrita en el SIGCA.'
              },
              {
                q: '¿Por qué necesitamos esta ley?',
                a: 'La ley es necesaria para regular lo referente a las comunidades gestoras del agua y el manejo de aguas residuales, estableciendo un marco jurídico para su fortalecimiento y desarrollo. También busca subsanar la "falla de reconocimiento" y el déficit legislativo de las comunidades organizadas que prestan servicios públicos, ya que la legislación actual (Ley 142 de 1994) se basa en un modelo de gestión empresarial que las ha excluido, imponiéndoles cargas y regulaciones inadecuadas.'
              },
              {
                q: '¿A quién beneficia esta legislación?',
                a: 'Esta legislación beneficia a las Comunidades Gestoras del Agua (C.G.A) y sus beneficiarios, promoviendo la garantía del derecho fundamental al agua. También beneficia al Estado al fortalecer, acompañar y promover la gestión comunitaria del agua.'
              },
              {
                q: '¿Qué cambia con esta ley para las comunidades?',
                a: 'Varios aspectos cambian: Reconocimiento Legal (marco jurídico específico para su fortalecimiento), Vigilancia Diferenciada (régimen especial y diferente al de prestadores con ánimo de lucro), Registro Localizado (a cargo de la gobernación o Alcaldía Mayor), Protección Ambiental (exclusión de minería/hidrocarburos en áreas de conservación), Financiación (transferencias monetarias del Estado), Exención Tributaria (régimen de juntas de acción comunal y exención de contribuciones especiales).'
              },
              {
                q: '¿Cómo afecta esto a mi acueducto comunitario?',
                a: 'Si su acueducto comunitario se constituye como C.G.A., se beneficiará del nuevo marco legal: Régimen Especial (vigilancia diferenciada), Registro en SIGCA, Protección de Fuentes (declaradas de interés público), Acceso a Subsidios y Apoyos (transferencias y subsidios definidos por nueva metodología).'
              }
            ];
          }
          if (bloque.titulo === 'Preguntas de Contexto') {
            preguntas = [
              {
                q: '¿Cuál es el problema que resuelve esta ley?',
                a: 'La ley busca resolver la falta de un marco jurídico adecuado que reconozca y fortalezca la gestión comunitaria del agua. Históricamente, las comunidades han sido excluidas de la Ley 142 de 1994, que opera bajo una lógica empresarial, imponiéndoles cargas y regulaciones inadecuadas. También atiende la necesidad de acceso universal al agua y saneamiento y responde a la emergencia climática.'
              },
              {
                q: '¿Cuántas comunidades gestoras existen en Colombia?',
                a: 'No se especifica el número total, pero entre 1998 y 2021, 565 municipios han presentado afectaciones en el servicio de acueducto por temporadas secas, lo que subraya la importancia de estos gestores.'
              },
              {
                q: '¿Qué pasaba antes de esta ley?',
                a: 'Las organizaciones comunitarias no se sentían representadas en la Ley 142 de 1994, que impulsaba un modelo de gestión empresarial. Esto forzaba a los acueductos comunitarios a cumplir lógicas empresariales y regulaciones inadecuadas. El Estado era percibido más como vigilante y sancionador que como garante del derecho.'
              },
              {
                q: '¿En qué otros países existe algo similar?',
                a: 'El documento no proporciona información sobre leyes similares en otros países.'
              }
            ];
          }
          if (bloque.titulo === 'Preguntas Prácticas') {
            preguntas = [
              {
                q: '¿Cómo me registro como Comunidad Gestora del Agua?',
                a: 'El acto de registro estará en cabeza de la gobernación de su domicilio (o la Alcaldía Mayor de Bogotá). Se debe presentar: acta de constitución/asamblea, estatutos, documento de identidad del representante legal y junta directiva, e identificación del área de gestión.'
              },
              {
                q: '¿Cuánto tiempo tengo para adaptarme a la ley?',
                a: 'Existe un régimen de transición: el Gobierno Nacional debe reglamentar el régimen especial en seis meses; las CGA pueden solicitar su inclusión en SIGCA y desvinculación del RUPS en seis meses; la estrategia de gestión del riesgo debe crearse en un año; los requisitos técnicos para aguas residuales y agua cruda serán reglamentados en el año siguiente.'
              },
              {
                q: '¿Qué beneficios concretos obtendré?',
                a: 'Beneficios: exclusión de actividades extractivas en áreas de conservación, prioridad en concesiones (mínimo 20 años), financiación directa, gasto social en saneamiento, exenciones tributarias y de contribuciones.'
              },
              {
                q: '¿Qué obligaciones tendré?',
                a: 'Obligaciones: incluir la denominación C.G.A. en la razón social, inscripción en SIGCA, acuerdo comunitario con beneficiarios, cumplimiento de calidad del agua y coordinación con el Ministerio de Salud.'
              },
              {
                q: '¿Recibiré apoyo financiero?',
                a: 'Sí, las CGA podrán recibir apoyo financiero a través de transferencias estatales para gastos de administración y operación. El manejo de aguas residuales en áreas sin alcantarillado se considera gasto social y permite el uso de recursos del Sistema General de Participaciones.'
              }
            ];
          }
          if (bloque.titulo === 'Preguntas sobre Estructura') {
            preguntas = [
              {
                q: '¿Cuántos artículos tiene la ley?',
                a: 'El proyecto de ley contiene al menos 39 artículos.'
              },
              {
                q: '¿Cuáles son los capítulos principales?',
                a: 'El proyecto se estructura en Títulos: TÍTULO I (Disposiciones Generales), TÍTULO II (Comunidades Gestoras del Agua), TÍTULO III (Gestión Ambiental Comunitaria), CAPÍTULO II (Fortalecimiento, Vigilancia y Control), TITULO VI (Régimen de Transición), entre otros.'
              },
              {
                q: '¿Qué dice el artículo más importante?',
                a: 'El Artículo 1 (Objeto) define la finalidad principal: regular lo referente a las comunidades gestoras del agua y el manejo de aguas residuales, estableciendo un marco jurídico para su fortalecimiento y desarrollo. El Artículo 5 establece los requisitos clave para el reconocimiento de una CGA.'
              },
              {
                q: '¿Dónde habla sobre financiación?',
                a: 'La financiación y apoyo económico se aborda principalmente en el Título V y en los artículos 28, 35 y 36, que regulan proyectos de fortalecimiento, transferencias monetarias y aportes bajo condición a las CGA.'
              }
            ];
          }
          if (bloque.titulo === 'Preguntas Interactivas en la Web') {
            preguntas = [
              {
                q: '¿Puedo buscar términos específicos como "CAR" o "SINA"?',
                a: 'El documento menciona "autoridad ambiental competente" y hace referencia al "Sistema Nacional de Atención y Prevención de Desastres", pero no se encuentran los acrónimos exactos "CAR" (Corporaciones Autónomas Regionales) ni "SINA" (Sistema Nacional Ambiental) en los fragmentos proporcionados.'
              },
              {
                q: '¿Puedo comparar artículos relacionados?',
                a: 'Sí, por ejemplo, puede comparar: Artículo 1 (Objeto) con Artículo 2 (Principios) y Artículo 3 (Enfoques) para entender la finalidad y el marco filosófico de la ley; Artículo 5 (Comunidades Gestoras del Agua) con Artículo 6 (Registro de las Comunidades Gestoras del Agua); Artículo 27 (SIGCA) con Artículo 39 (Régimen de Transición).'
              },
              {
                q: '¿Puedo descargar o imprimir artículos específicos?',
                a: 'Como Q&A System basado en el PDF, puedo extraer y citar textualmente cualquier artículo o párrafo solicitado, lo que equivale a proporcionar un extracto para su descarga o impresión.'
              }
            ];
          }
          // Render acordeón especial o normal
          const render = (
            <div key={idx+1} style={{marginBottom: '0.2em', border: '1px solid #ccc', borderRadius: 6}}>
              <button
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '1em',
                  background: bgColor,
                  border: 'none',
                  borderRadius: 6,
                  fontWeight: 'bold',
                  color: textColor,
                  fontSize: '1.1em',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
                aria-expanded={openIndex === thisIdx}
                aria-controls={`panel-bloque-${thisIdx}`}
                id={`accordion-bloque-${thisIdx}`}
                onClick={() => handleAccordion(thisIdx, bloque.titulo)}
              >
                <span>{bloque.titulo}</span>
                <span style={{transition: 'transform 0.2s', transform: openIndex === thisIdx ? 'rotate(90deg)' : 'rotate(0deg)'}}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={arrowColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                </span>
              </button>
              {openIndex === thisIdx && (
                <div id={`panel-bloque-${thisIdx}`} role="region" aria-labelledby={`accordion-bloque-${thisIdx}`} style={{padding: '0.3em 0.4em 0.05em 0.4em', background: '#fff', color: '#222', borderRadius: 6, textAlign: 'justify', fontSize: '1.01em', lineHeight: 1.35}}>
                  {preguntas ? (
                    <div style={{display: 'flex', flexDirection: 'column', gap: '0.2em'}}>
                      {preguntas.map((p, i) => (
                        <div key={i} style={{padding: '0.1em 0', borderBottom: i < preguntas.length-1 ? '1px solid #e0e0e0' : 'none'}}>
                          <b>{p.q}</b><br/>{p.a}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div
                      style={{whiteSpace: 'pre-wrap', color: '#222', background: 'inherit', fontFamily: 'inherit', margin: 0, textAlign: 'justify'}}
                      dangerouslySetInnerHTML={{ __html: formatContenido(bloque.contenido) }}
                    />
                  )}
                </div>
              )}
            </div>
          );
          visualIdx++;
          return render;
        })}
      </div>
    </section>
  );
}

// Extrae la sección de texto entre dos títulos (o hasta el final)
function extraerSeccion(texto, inicio, fin) {
  const ini = texto.indexOf(inicio);
  if (ini === -1) return '';
  let desde = texto.slice(ini + inicio.length);
  if (fin) {
    const finIdx = desde.indexOf(fin);
    if (finIdx !== -1) {
      desde = desde.slice(0, finIdx);
    }
  }
  return desde.trim();
}
// Función para resaltar subtítulos, ítems y preguntas en negrita
function formatContenido(text) {
  if (!text) return '';
  let html = text;
  // Subtítulos tipo "TÍTULO I: ..." o "CAPÍTULO II: ..."
  html = html.replace(/(T[ÍI]TULO [IVXLC]+: [^\n]+)/g, '<strong>$1</strong>');
  html = html.replace(/(CAP[ÍI]TULO [IVXLC]+: [^\n]+)/g, '<strong>$1</strong>');
  // Ítems numerados "1. ...", "2. ..." al inicio de línea
  html = html.replace(/(^|\n)(\d+\.|•)\s([^\n]+)/g, '$1<strong>$2 $3</strong>');
  // Preguntas que empiezan con "¿" y terminan con "?"
  html = html.replace(/(¿[^\n?]{5,}\?)/g, '<strong>$1</strong>');
  // Artículos "Artículo 1", "Artículo 10", etc.
  html = html.replace(/(Artículo \d+)/g, '<strong>$1</strong>');
  // Quitar dobles espacios accidentales
  html = html.replace(/  +/g, ' ');
  return html;
}

export default ResumenLeyAccordion;
