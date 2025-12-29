import './App.css';
import FaqComponent from './components/FaqComponent';
import ResumenLeyAccordion from './components/ResumenLeyAccordion';
import GlosarioComponent from './components/GlosarioComponent';
import ConceptosComponent from './components/ConceptosComponent';
import TimelineComponent from './components/TimelineComponent';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';


import mascota from './assets/cisne-diacua-buque.png';

function App() {
  return (
    <>
      <Navbar />
      <div style={{maxWidth: 700, margin: '0 auto', padding: '2em'}}>
        <Header />
        <div style={{position: 'relative', marginBottom: '1.2em'}}>
          <h1 style={{textAlign: 'center', marginTop: 0, marginBottom: '1em'}}>
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
        <h2 style={{textAlign: 'center', margin: '0 0 1.1em 0', fontWeight: 700, fontSize: '1.35em', color: '#fff'}}>
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
        <ResumenLeyAccordion />
        <ConceptosComponent />
        <TimelineComponent />
        <GlosarioComponent />
        <FaqComponent />
        <Footer />
      </div>
    </>
  );
}

export default App
