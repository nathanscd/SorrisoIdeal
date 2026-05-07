import React, { useState, useEffect } from 'react';
import '../pages/style/GlobalStyles.css';
import './components.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab);


export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav-container">
        <a href="/" className="logo">SORRISO IDEAL.</a>
        <ul className="nav-links">
          <li><a href="/sobre">Clínica</a></li>
          <li><a href="/servicos">Soluções</a></li>
          <li><a href="/contato">Contato</a></li>
        </ul>
        <a href="/agendamento" className="btn-premium" id='btn-nav'>Reservar Horário</a>
      </nav>
    </header>
  );
};

// --- FOOTER COMPONENT ---
export const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-container">
      
      <div>
        <h2 className="logo" style={{ color: 'white', marginBottom: '1.5rem', display: 'block' }}>
          SORRISO IDEAL.
        </h2>
        <p style={{ opacity: 0.6 }}>
          A referência em odontologia de luxo e reabilitação oral avançada. Transformando vidas através da ciência e arte.
        </p>
      </div>

      <div className='icons'>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" >
          <FontAwesomeIcon icon={["fab", "instagram"]} className='icon'/>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className='icon'>
          <FontAwesomeIcon icon={["fab", "linkedin"]} className='icon'/>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className='icon'>
          <FontAwesomeIcon icon={["fab", "facebook"]} className='icon'/>
        </a>
      </div>

      <div>
        <h4>Navegação</h4>
        <ul style={{ listStyle: 'none', opacity: 0.7, marginTop: '1rem', padding: 0 }}>
          <li>
            <Link to="/sobre" style={{ color: 'white', textDecoration: 'none' }}>
              Sobre
            </Link>
          </li>
          <li>
            <Link to="/servicos" style={{ color: 'white', textDecoration: 'none' }}>
              Serviços
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h4>Legal</h4>
        <ul style={{ listStyle: 'none', opacity: 0.7, padding: 0 }}>
          <li><a href="/privacidade" style={{ color: 'white', textDecoration: 'none' }}>Privacidade</a></li>
          <li><a href="/termos" style={{ color: 'white', textDecoration: 'none' }}>Termos de Uso</a></li>
          <li>CRO: 12345-CE</li>
        </ul>
      </div>

      <div>
        <h4>Contato</h4>
        <p style={{ opacity: 0.7, marginTop: '1rem' }}>(85) 4002-8922</p>
        <p style={{ opacity: 0.7 }}>Fortaleza, CE</p>
      </div>

    </div>

    <div style={{ textAlign: 'center', marginTop: '60px', opacity: 0.3, fontSize: '0.8rem' }}>
      © 2026 Sorriso Ideal. Made by 15Miles. Todos os direitos reservados.
    </div>
  </footer>
);

// --- REVEAL WRAPPER (Para Animações) ---
export const Reveal: React.FC<{ children: React.ReactNode, delay?: number }> = ({ children, delay = 0 }) => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      });
    }, { threshold: 0.1 });
    
    if (domRef.current) observer.observe(domRef.current);
    return () => { if (domRef.current) observer.unobserve(domRef.current); };
  }, []);

  return (
    <div 
      className={`reveal ${isVisible ? 'visible' : ''}`} 
      ref={domRef}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
