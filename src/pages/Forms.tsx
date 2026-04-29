import React from 'react';
import { Header, Footer, Reveal } from '../components/Components';
import './style/GlobalStyles.css';

// --- CONTATO PAGE ---
export const Contato: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
  };

  return (
    <>
      <Header />
      <main style={{ paddingTop: '150px', paddingBottom: '100px' }}>
        <Reveal>
          <div className="form-wrapper">
            <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--primary)' }}>Fale Conosco</h2>
            <form onSubmit={handleSubmit}>
              <div className="field-group">
                <label>Nome Completo</label>
                <input type="text" placeholder="Seu nome" required />
              </div>
              <div className="field-group">
                <label>E-mail</label>
                <input type="email" placeholder="seu@email.com" required />
              </div>
              <div className="field-group">
                <label>Mensagem</label>
                <textarea rows={5} placeholder="Como podemos ajudar?" required></textarea>
              </div>
              <button type="submit" className="btn-premium" style={{ width: '100%', border: 'none' }}>Enviar Mensagem</button>
            </form>
          </div>
        </Reveal>
      </main>
      <Footer />
    </>
  );
};

// --- AGENDAMENTO PAGE ---
export const Agendamento: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Solicitação de agendamento enviada! Entraremos em contato via WhatsApp.');
  };

  return (
    <>
      <Header />
      <main style={{ paddingTop: '150px', paddingBottom: '100px' }}>
        <Reveal>
          <div className="form-wrapper">
            <h2 style={{ textAlign: 'center', marginBottom: '1rem', color: 'var(--primary)' }}>Reservar Horário</h2>
            <p style={{ textAlign: 'center', marginBottom: '3rem', opacity: 0.6 }}>Dê o primeiro passo para sua transformação.</p>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div className="field-group">
                  <label>Nome</label>
                  <input type="text" required />
                </div>
                <div className="field-group">
                  <label>WhatsApp</label>
                  <input type="tel" required />
                </div>
              </div>
              <div className="field-group">
                <label>Objetivo</label>
                <select required>
                  <option value="">Selecione...</option>
                  <option value="estetica">Estética</option>
                  <option value="implante">Implantes</option>
                  <option value="invisalign">Invisalign</option>
                </select>
              </div>
              <div className="field-group">
                <label>Data Preferencial</label>
                <input type="date" required />
              </div>
              <button type="submit" className="btn-premium" style={{ width: '100%', border: 'none', padding: '1.2rem' }}>Solicitar Reserva</button>
            </form>
          </div>
        </Reveal>
      </main>
      <Footer />
    </>
  );
};
