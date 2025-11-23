// src/pages/EnvieSuaDuvida.tsx
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Alert } from '@mui/material';

const EnvieSuaDuvida = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/mnnrkbvb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ nome: '', email: '', mensagem: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6, color: '#FFFFFF' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Envie sua Dúvida
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Tem alguma pergunta sobre direito? Preencha o formulário abaixo e responderemos o mais breve possível.
      </Typography>

      {/* Mensagem de sucesso */}
      {status === 'success' && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Sua mensagem foi enviada com sucesso! Em breve entraremos em contato.
        </Alert>
      )}

      {/* Mensagem de erro */}
      {status === 'error' && (
        <Alert severity="error" sx={{ mb: 2 }}>
          Ocorreu um erro ao enviar sua dúvida. Tente novamente ou entre em contato por e-mail.
        </Alert>
      )}

      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
        <TextField
          fullWidth
          label="Nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          margin="normal"
          required
          autoComplete="new-password"
          InputLabelProps={{ style: { color: '#B0B0B0' } }}
          InputProps={{ style: { color: '#FFFFFF', backgroundColor: '#0E3A6E' } }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#64B5F6' },
              '&:hover fieldset': { borderColor: '#D4AF37' },
              '&.Mui-focused fieldset': { borderColor: '#D4AF37' },
            },
          }}
        />

        <TextField
          fullWidth
          label="E-mail"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          required
          autoComplete="new-password"
          InputLabelProps={{ style: { color: '#B0B0B0' } }}
          InputProps={{ style: { color: '#FFFFFF', backgroundColor: '#0E3A6E' } }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#64B5F6' },
              '&:hover fieldset': { borderColor: '#D4AF37' },
              '&.Mui-focused fieldset': { borderColor: '#D4AF37' },
            },
          }}
        />

        <TextField
          fullWidth
          label="Sua dúvida"
          name="mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          multiline
          rows={5}
          margin="normal"
          required
          autoComplete="new-password"
          InputLabelProps={{ style: { color: '#B0B0B0' } }}
          InputProps={{ style: { color: '#FFFFFF', backgroundColor: '#0E3A6E' } }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#64B5F6' },
              '&:hover fieldset': { borderColor: '#D4AF37' },
              '&.Mui-focused fieldset': { borderColor: '#D4AF37' },
            },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          disabled={status === 'sending'}
          sx={{
            mt: 2,
            backgroundColor: '#D4AF37',
            color: '#0A2E5C',
            fontWeight: 'bold',
            '&:hover': { backgroundColor: '#B8860B' },
          }}
        >
          {status === 'sending' ? 'Enviando...' : 'Enviar'}
        </Button>
      </Box>
    </Container>
  );
};

export default EnvieSuaDuvida;