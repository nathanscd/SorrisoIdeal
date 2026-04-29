import React from 'react';
import { Header, Footer, Reveal } from '../components/Components';
import './style/GlobalStyles.css';

const Servicos: React.FC = () => {
  const servicos = [
    { title: 'Lentes de Contato', desc: 'Transformação estética total com mínimo desgaste.', icon: 'fa-teeth-open' },
    { title: 'Implantes 24h', desc: 'Carga imediata para quem não pode esperar.', icon: 'fa-vials' },
    { title: 'Invisalign®', desc: 'Alinhamento invisível e confortável.', icon: 'fa-align-left' },
    { title: 'Harmonização', desc: 'Equilíbrio perfeito entre sorriso e face.', icon: 'fa-sparkles' },
    { title: 'Reabilitação Oral', desc: 'Soluções complexas para casos multidisciplinares.', icon: 'fa-smile-beam' },
    { title: 'Check-up Digital', desc: 'Prevenção de luxo com câmeras HD.', icon: 'fa-shield-virus' }
  ];

  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px' }}>
        <section className="section-container">
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <span className="badge">Nossas Soluções</span>
              <h2 style={{ fontSize: '3.5rem', color: 'var(--primary)' }}>Tratamentos de Alta Performance</h2>
            </div>
          </Reveal>

          <div className="grid-solutions">
            {servicos.map((s, i) => (
              <Reveal key={i}>
                <div className="card-lux">
                  <div className="icon-wrapper"><i className={`fas ${s.icon}`}></i></div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Servicos;
