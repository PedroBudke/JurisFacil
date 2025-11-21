import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'; // Remove estilos padrão do navegador
import theme from './theme/theme';

// Componentes
import Navbar from './componnets/Navbar';
import Footer from './componnets/Footer';
import Home from './pages/Home';
import DuvidasFrequentes from './pages/DuvidasFrequentes';
import EnvieSuaDuvida from './pages/EnvieSuaDuvida';
import Sobre from './pages/Sobre';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <main
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center', 
              alignItems: 'center',    
              padding: '1rem',
              width: '100%',
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/duvidas-frequentes" element={<DuvidasFrequentes />} />
              <Route path="/envie-sua-duvida" element={<EnvieSuaDuvida />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;