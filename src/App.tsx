import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Servicos from './pages/Servicos';
import { Contato, Agendamento } from './pages/Forms';
import './App.css'

function App() {
  return (
    <div className="Routes">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/agendamento" element={<Agendamento />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
