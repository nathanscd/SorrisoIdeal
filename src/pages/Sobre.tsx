import React from 'react';
import { Header, Footer } from '../components/Components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem, faBolt, faHeart } from '@fortawesome/free-solid-svg-icons'
import './style/About.css';

const Sobre: React.FC = () => {
  return (
    <>
      <Header />
      <main className="sobre-main">
        
        <section className="hero sobre-hero">
          <div className="hero-content reveal">
            <span className="hero-badge">Nossa Essência</span>
            <h1 className="sobre-title">Onde a ciência encontra a arte.</h1>
            <p>
              Mais do que uma clínica, somos um centro de reabilitação oral focado em devolver a dignidade e a alegria de viver de nossos pacientes.
            </p>
          </div>
        </section>

        <section className="sobre-section">
          <div className="sobre-grid">
            
            <div className="reveal">
              <div className="image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Tecnologia Clínica"
                />
                <div className="image-badge reveal">
                  <h4>15 Anos</h4>
                  <p>de Inovação Constante</p>
                </div>
              </div>
            </div>

            <div className="reveal">
              <h2 className="sobre-subtitle">
                Compromisso com a sua resolução.
              </h2>

              <p className="sobre-text">
                Na Sorriso Ideal, entendemos que você não quer apenas um dentista. Você quer alguém que resolva sua dor, sua insegurança e que respeite seu tempo.
              </p>

              <p className="sobre-text">
                Nossa infraestrutura foi desenhada para oferecer o que há de mais moderno no mundo: do escaneamento intraoral 3D à sedação consciente, tudo para que sua experiência seja impecável.
              </p>

              <div className="sobre-features">
                <div>
                  <i className="fas fa-check-circle"></i>
                  <h4>Precisão Digital</h4>
                </div>
                <div>
                  <i className="fas fa-check-circle"></i>
                  <h4>Conforto Total</h4>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="sobre-values">
          <div className="section-header reveal">
            <span className="hero-badge">Pilares de Excelência</span>
            <h2>Nossos Valores Inegociáveis</h2>
          </div>

          <div className="solutions-grid">
            <div className="solution-card reveal">
              <div className="icon-box"><FontAwesomeIcon icon={faGem} className='icon'/></div>
              <h3>Integridade</h3>
              <p>Diagnósticos precisos e honestos. Só indicamos o que você realmente precisa para sua saúde e estética.</p>
            </div>

            <div className="solution-card reveal">
              <div className="icon-box"><FontAwesomeIcon icon={faBolt} className='icon'/></div>
              <h3>Agilidade</h3>
              <p>Valorizamos seu tempo. Fluxos digitais que reduzem o número de visitas e aceleram seu resultado.</p>
            </div>

            <div className="solution-card reveal">
              <div className="icon-box"><FontAwesomeIcon icon={faHeart} className='icon'/></div>
              <h3>Empatia</h3>
              <p>Entendemos seus medos. Nossa equipe é treinada para oferecer um acolhimento humano e livre de julgamentos.</p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default Sobre;