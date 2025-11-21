// src/pages/Home.tsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

// Importe a imagem como módulo
import balanceImg from '../assets/balance.png'; // Caminho correto

const Home = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#0A2E5C',
        minHeight: '100vh',
        color: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        py: 6,
        px: 2,
        boxSizing: 'border-box',
      }}
    >
      {/* Ícone da balança (PNG branco → dourado via filtro) */}
      <Box sx={{ mb: 2 }}>
        <img
          src={balanceImg}
          alt="Balança da Justiça"
          style={{
            width: '64px',
            height: '64px',
            // Filtro que transforma BRANCO → DOURADO
            filter: 'brightness(0) saturate(100%) hue-rotate(45deg) invert(100%)',
          }}
        />
      </Box>

      {/* Título com efeito hover */}
      <Typography
        variant="h3"
        fontWeight="bold"
        gutterBottom
        sx={{
          cursor: 'default',
          transition: 'all 0.3s ease',
          '&:hover': {
            color: '#D4AF37',
            transform: 'scale(1.03)',
            textShadow: '0 4px 8px rgba(212, 175, 55, 0.3)',
          },
        }}
      >
        JurisFácil
      </Typography>

      <Typography variant="body1" sx={{ opacity: 0.9, maxWidth: '600px', mb: 4 }}>
        Um espaço onde o Direito encontra a clareza. Aqui, você compreende documentos, conceitos e situações jurídicas — sem jargões, com autonomia.
      </Typography>

      <Button
        component={Link}
        to="/sobre"
        variant="contained"
        size="large"
        sx={{
          backgroundColor: '#D4AF37',
          color: '#0A2E5C',
          fontWeight: 'bold',
          fontSize: '1.1rem',
          padding: '12px 32px',
          borderRadius: 3,
          boxShadow: '0 4px 12px rgba(212, 175, 55, 0.4)',
          '&:hover': {
            backgroundColor: '#B8860B',
            transform: 'scale(1.05)',
            boxShadow: '0 6px 16px rgba(212, 175, 55, 0.5)',
          },
        }}
      >
        Conheça nossa proposta
      </Button>
    </Box>
  );
};

export default Home;