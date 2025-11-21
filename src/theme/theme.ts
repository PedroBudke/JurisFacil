// src/theme/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0A2E5C', // Azul marinho forte
      light: '#1E4A7A',
      dark: '#061F40',
    },
    secondary: {
      main: '#D4AF37', // Dourado clássico (ouro)
      light: '#FFD700',
      dark: '#B8860B',
    },
    background: {
      default: '#0A2E5C', // Fundo principal escuro
      paper: '#0E3A6E',   // Leve variação para cards
    },
    text: {
      primary: '#FFFFFF', // Texto branco por padrão
      secondary: '#E0E0E0',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { color: '#FFFFFF' },
    h2: { color: '#FFFFFF' },
    h3: { color: '#FFFFFF' },
    h4: { color: '#FFFFFF' },
    h5: { color: '#FFFFFF' },
    h6: { color: '#FFFFFF' },
    body1: { color: '#FFFFFF' },
    body2: { color: '#E0E0E0' },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#0A2E5C',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
        containedPrimary: {
          backgroundColor: '#0A2E5C',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#061F40',
          },
        },
        containedSecondary: {
          backgroundColor: '#D4AF37',
          color: '#0A2E5C',
          '&:hover': {
            backgroundColor: '#B8860B',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#D4AF37',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: '#0E3A6E',
          color: '#FFFFFF',
          '&:before': {
            display: 'none',
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        content: {
          margin: '12px 0',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#64B5F6',
            },
            '&:hover fieldset': {
              borderColor: '#D4AF37',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#D4AF37',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#B0B0B0',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#D4AF37',
          },
          '& .MuiInputBase-input': {
            color: '#FFFFFF',
          },
        },
      },
    },
  },
});

export default theme;