import React, { useState, useEffect } from 'react';
import '../pages/style/GlobalStyles.css';
import './components.css';

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
          <li><a href="/">Experiência</a></li>
          <li><a href="/sobre">Clínica</a></li>
          <li><a href="/servicos">Soluções</a></li>
          <li><a href="/contato">Contato</a></li>
        </ul>
        <a href="/agendamento" className="btn-premium">Reservar Horário</a>
      </nav>
    </header>
  );
};

// --- FOOTER COMPONENT ---
export const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-container">
      <div>
        <h2 className="logo" style={{ color: 'white', marginBottom: '1.5rem', display: 'block' }}>SORRISO IDEAL.</h2>
        <p style={{ opacity: 0.6 }}>Odontologia de alta performance e luxo digital.</p>
      </div>
      <div>
        <h4>Navegação</h4>
        <ul style={{ listStyle: 'none', opacity: 0.7, marginTop: '1rem' }}>
          <li><a href="/sobre" style={{ color: 'white', textDecoration: 'none' }}>Sobre</a></li>
          <li><a href="/servicos" style={{ color: 'white', textDecoration: 'none' }}>Serviços</a></li>
        </ul>
      </div>
      <div>
        <h4>Contato</h4>
        <p style={{ opacity: 0.7, marginTop: '1rem' }}>(11) 4002-8922</p>
        <p style={{ opacity: 0.7 }}>São Paulo, SP</p>
      </div>
    </div>
    <div style={{ textAlign: 'center', marginTop: '60px', opacity: 0.3, fontSize: '0.8rem' }}>
      &copy; 2026 Sorriso Ideal. Todos os direitos reservados.
    </div>
  </footer>
);

// --- REVEAL WRAPPER (Para Animações) ---
export const Reveal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    if (domRef.current) observer.observe(domRef.current);
    return () => { if (domRef.current) observer.unobserve(domRef.current); };
  }, []);

  return (
    <div className={`reveal ${isVisible ? 'visible' : ''}`} ref={domRef}>
      {children}
    </div>
  );
};
