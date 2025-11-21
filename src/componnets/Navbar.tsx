// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

const navLinks = [
  { name: 'Sobre', to: '/sobre' },
  { name: 'Dúvidas', to: '/duvidas-frequentes' },
  { name: 'Fale Conosco', to: '/envie-sua-duvida' },
];

  return (
    <AppBar position="static" elevation={2}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo / Nome do site com efeito hover apenas na palavra */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            fontWeight: 600,
            color: '#FFFFFF',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            '&:hover': {
              color: '#D4AF37', // Dourado
              transform: 'scale(1.03)',
              textShadow: '0 2px 4px rgba(212, 175, 55, 0.3)',
            },
          }}
        >
          JurisFacil
        </Typography>

        {/* Links de navegação */}
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navLinks.map((link, index) => (
              <Typography
                key={index}
                component={Link}
                to={link.to}
                sx={{
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontWeight: 'medium',
                  '&:hover': {
                    color: '#D4AF37',
                  },
                }}
              >
                {link.name}
              </Typography>
            ))}
          </Box>
        )}

        {isMobile && (
          <Typography variant="body2" color="text.secondary">
            Menu
          </Typography>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;