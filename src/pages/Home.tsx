import React, { useState, useEffect, useRef } from 'react';
import { Header, Footer, Reveal } from '../components/Components';
import './style/Home.css';
import './style/GlobalStyles.css';

const Home: React.FC = () => {
    const [heroScrolled, setHeroScrolled] = useState(false);
    const [ctaScrolled, setCtaScrolled] = useState(false);
    const ctaRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const handleScroll = () => setHeroScrolled(window.scrollY > 50);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => setCtaScrolled(entry.isIntersecting),
        { threshold: 0.1 }
      );
      if (ctaRef.current) observer.observe(ctaRef.current);
      return () => observer.disconnect();
    }, []);

  return (
    <div className="home-wrapper">
      <Header />

      <main>
        <section className="hero">
          <Reveal>  
            <div className={heroScrolled ? 'hero-content scrolled' : 'hero-content'}>
              <span className="hero-badge">Tecnologia & Bem-estar</span>
              <h1>Sua confiança de volta em cada sorriso.</h1>
              <p>
                Não entregamos apenas tratamentos. Resolvemos a insegurança de sorrir e a dor de não se sentir bem consigo mesmo através da odontologia digital de luxo.
              </p>
              <div className="hero-actions">
                <a href="/agendamento" className="btn-premium">
                  Agendar Avaliação Digital
                </a>
                <a href="#solucoes" className="btn-premium btn-outline">
                  Conhecer Soluções
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="solucoes">
          <Reveal>
            <div className="section-header">
              <span className="hero-badge">Como resolvemos seu problema</span>
              <h2>Soluções focadas no seu resultado.</h2>
              <p>
                Entendemos que cada paciente busca uma transformação. Nossa abordagem é focada em resolver sua dor com o máximo de conforto.
              </p>
            </div>
          </Reveal>

          <div className="solutions-grid">
            <Reveal>
              <div className="solution-card">
                <div className="icon-box">🦷</div>
                <h3>Estética de Elite</h3>
                <p>Lentes de contato e facetas que corrigem imperfeições de forma natural e duradoura.</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="solution-card">
                <div className="icon-box">🔬</div>
                <h3>Implantes Digitais</h3>
                <p>Recupere a mastigação sem cortes desnecessários, usando guias cirúrgicos 3D de alta precisão.</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="solution-card">
                <div className="icon-box">🛡️</div>
                <h3>Prevenção Inteligente</h3>
                <p>Protocolos exclusivos para garantir que você nunca mais tenha problemas urgentes com sua saúde bucal.</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="cta-section" ref={ctaRef}>
          <div className={ctaScrolled ? 'cta-container scrolled' : 'cta-container'}>
            <div className='cta-content'>
              <Reveal>
                <h2>Pronto para sua melhor versão?</h2>
                <p>
                  Nossa equipe de especialistas está pronta para desenhar o plano de tratamento que vai mudar sua vida.
                </p>
                <a href="/agendamento" className="btn-premium btn-white">
                  Falar com Especialista
                </a>
              </Reveal>
            </div>
            
            <div className="cta-stats">
              <Reveal delay={100}>
                <div className="stat-item">
                  <h4>12k+</h4>
                  <p>Sorrisos Transformados</p>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="stat-item">
                  <h4>15+</h4>
                  <p>Anos de Excelência</p>
                </div>
              </Reveal>
              <Reveal delay={300}>
                <div className="stat-item">
                  <h4>100%</h4>
                  <p>Tecnologia Digital</p>
                </div>
              </Reveal>
              <Reveal delay={400}>
                <div className="stat-item">
                  <h4>5★</h4>
                  <p>Avaliação no Google</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
