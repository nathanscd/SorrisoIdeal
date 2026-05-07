import { Header, Footer, Reveal } from '../components/Components';
import { useState, useEffect, useRef } from 'react';
import './style/Servicos.css';

const Servicos: React.FC = () => {
  const [ctaScrolled, setCtaScrolled] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setCtaScrolled(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ctaRef.current) observer.observe(ctaRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main className="servicos-main">

        <section className="hero servicos-hero">
          <div className="hero-content">
            <Reveal>
              <span className="hero-badge">Nosso Arsenal Tecnológico</span>
              <h1 className="servicos-title">Soluções que transformam vidas.</h1>
              <p>
                Não fazemos apenas procedimentos. Criamos caminhos para você recuperar sua autoestima e saúde através da tecnologia de ponta.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="servicos-section">
          <div className="solutions-grid">

            <Reveal delay={100}>
              <div className="solution-card">
                <div className="icon-box"><i className="fas fa-teeth-open"></i></div>
                <h3>Lentes de Contato Dental</h3>
                <p className="card-text">
                  A solução definitiva para dentes manchados, desalinhados ou com formatos indesejados. Um sorriso de estrela em poucas sessões.
                </p>
                <ul className="card-list">
                  <li><i className="fas fa-check"></i> Mínimo desgaste</li>
                  <li><i className="fas fa-check"></i> Planejamento Digital DSD</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="solution-card">
                <div className="icon-box"><i className="fas fa-vials"></i></div>
                <h3>Implantes em 24h</h3>
                <p className="card-text">
                  Carga imediata para quem não pode esperar. Recupere sua mastigação e estética no mesmo dia com segurança total.
                </p>
                <ul className="card-list">
                  <li><i className="fas fa-check"></i> Cirurgia Guiada sem cortes</li>
                  <li><i className="fas fa-check"></i> Sedação Consciente</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="solution-card">
                <div className="icon-box"><i className="fas fa-align-left"></i></div>
                <h3>Invisalign® & Alinhadores</h3>
                <p className="card-text">
                  Alinhe seus dentes com discrição absoluta. O fim dos aparelhos metálicos e do desconforto constante.
                </p>
                <ul className="card-list">
                  <li><i className="fas fa-check"></i> Removíveis e higiênicos</li>
                  <li><i className="fas fa-check"></i> Resultados 2x mais rápidos</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="solution-card">
                <div className="icon-box"><i className="fas fa-smile-beam"></i></div>
                <h3>Reabilitação Oral</h3>
                <p className="card-text">
                  Para casos complexos que exigem uma visão multidisciplinar. Devolvemos a harmonia funcional e estética da sua boca.
                </p>
                <ul className="card-list">
                  <li><i className="fas fa-check"></i> Equipe de especialistas</li>
                  <li><i className="fas fa-check"></i> Foco em longevidade</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={500}>
              <div className="solution-card">
                <div className="icon-box"><i className="fas fa-sparkles"></i></div>
                <h3>Harmonização Orofacial</h3>
                <p className="card-text">
                  O equilíbrio perfeito entre seu sorriso e sua face. Botox, preenchimento e bioestimuladores de colágeno.
                </p>
                <ul className="card-list">
                  <li><i className="fas fa-check"></i> Naturalidade acima de tudo</li>
                  <li><i className="fas fa-check"></i> Procedimentos minimamente invasivos</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={600}>
              <div className="solution-card">
                <div className="icon-box"><i className="fas fa-shield-virus"></i></div>
                <h3>Check-up Digital</h3>
                <p className="card-text">
                  Prevenção de luxo. Identificamos problemas antes mesmo que eles causem dor ou exijam tratamentos caros.
                </p>
                <ul className="card-list">
                  <li><i className="fas fa-check"></i> Câmera intraoral HD</li>
                  <li><i className="fas fa-check"></i> Laudo detalhado</li>
                </ul>
              </div>
            </Reveal>

          </div>
        </section>

        <section className={`servicos-cta ${ctaScrolled ? 'scrolled' : ''}`} ref={ctaRef}>
          <Reveal>
            <h2>Não sabe por onde começar?</h2>
            <p>
              Agende uma consulta de avaliação global. Vamos entender seus objetivos e desenhar o melhor caminho juntos.
            </p>
            <a href="/agendamento" className="btn-premium btn-white">
              Agendar Avaliação Global
            </a>
          </Reveal>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default Servicos;