import React from 'react';
import { Header, Footer, Reveal } from '../components/Components';
import './style/GlobalStyles.css';

const Sobre: React.FC = () => {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px' }}>
        <section className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <Reveal>
              <div style={{ position: 'relative' }}>
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80" 
                  alt="Clínica" 
                  style={{ width: '100%', borderRadius: '40px', boxShadow: 'var(--shadow-lux)' }} 
                />
              </div>
            </Reveal>
            <Reveal>
              <div>
                <span className="badge">Nossa História</span>
                <h2 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '2rem' }}>Onde a Ciência encontra a Arte.</h2>
                <p style={{ color: 'var(--text-sub)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                  Fundada com o propósito de transformar a experiência odontológica, a Sorriso Ideal une tecnologia de ponta a um atendimento humanizado.
                </p>
                <p style={{ color: 'var(--text-sub)', fontSize: '1.1rem' }}>
                  Nossa missão é resolver problemas complexos com simplicidade e elegância, garantindo que cada paciente saia com sua melhor versão.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Sobre;
