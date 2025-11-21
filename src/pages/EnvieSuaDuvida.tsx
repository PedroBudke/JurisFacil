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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simula envio bem-sucedido após 1 segundo
    setTimeout(() => {
      setStatus('success');
      setFormData({ nome: '', email: '', mensagem: '' });
    }, 1000);
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6, color: '#FFFFFF' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Envie sua Dúvida
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Tem alguma pergunta sobre direito? Preencha o formulário abaixo e responderemos o mais breve possível.
      </Typography>

      {status === 'success' && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Sua mensagem foi enviada com sucesso! Em breve entraremos em contato.
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
          autoComplete="new-password" // ← Previne sugestões erradas
          InputLabelProps={{
            style: { color: '#B0B0B0' }, // Rótulo cinza claro
          }}
          InputProps={{
            style: {
              color: '#FFFFFF', // Texto branco dentro do campo
              backgroundColor: '#0E3A6E', // Fundo azul escuro
            },
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#64B5F6', // Borda azul clara por padrão
              },
              '&:hover fieldset': {
                borderColor: '#D4AF37', // Borda dourada no hover
              },
              '&.Mui-focused fieldset': {
                borderColor: '#D4AF37', // Borda dourada no foco
              },
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
          InputLabelProps={{
            style: { color: '#B0B0B0' },
          }}
          InputProps={{
            style: {
              color: '#FFFFFF',
              backgroundColor: '#0E3A6E',
            },
          }}
          sx={{
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
          InputLabelProps={{
            style: { color: '#B0B0B0' },
          }}
          InputProps={{
            style: {
              color: '#FFFFFF',
              backgroundColor: '#0E3A6E',
            },
          }}
          sx={{
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
          }}
        />

        <Button
          type="submit"
          variant="contained"
          disabled={status === 'sending' || status === 'success'}
          sx={{
            mt: 2,
            backgroundColor: '#D4AF37', // Dourado
            color: '#0A2E5C', // Texto escuro
            fontWeight: 'bold',
            padding: '10px 24px',
            fontSize: '1.05rem',
            borderRadius: 2,
            '&:hover': {
              backgroundColor: '#B8860B', // Dourado mais escuro
              transform: 'scale(1.02)',
              boxShadow: '0 4px 8px rgba(212, 175, 55, 0.3)',
            },
            transition: 'all 0.25s ease',
          }}
        >
          {status === 'sending' ? 'Enviando...' : 'Enviar'}
        </Button>
      </Box>
    </Container>
  );
};

export default EnvieSuaDuvida;