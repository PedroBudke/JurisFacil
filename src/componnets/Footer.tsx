// src/components/Footer.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        mt: 'auto',
        backgroundColor: 'background.paper', // Usa a cor do tema
        textAlign: 'center',
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} <span style={{ color: '#D4AF37' }}>JurisFacil</span> – Todos os direitos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;