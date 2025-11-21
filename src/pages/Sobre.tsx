// src/pages/Sobre.tsx
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Sobre = () => {
  return (
    <Container maxWidth="md" sx={{ py: 6, color: '#FFFFFF' }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom align="center">
        Sobre a JurisFácil
      </Typography>

      <Typography variant="body1" paragraph>
        A <strong>JurisFácil</strong> é um projeto concebido dentro da disciplina <em>Direito 4.0</em>, nascido da percepção — vivenciada por estudantes de Direito — de que a linguagem jurídica ainda é um obstáculo para quem não está imerso na área.
      </Typography>

      <Typography variant="body1" paragraph>
        Mesmo dentro da academia, decifrar documentos, termos técnicos ou conceitos especializados demanda esforço excessivo. Isso mostra que o problema é estrutural: o Direito, embora essencial, exclui pela forma como se expressa.
      </Typography>

      <Typography variant="h6" fontWeight="medium" gutterBottom sx={{ mt: 3 }}>
        Nosso propósito
      </Typography>
      <Typography variant="body1" paragraph>
        Não buscamos substituir advogados, mas <strong>aproximar o conhecimento jurídico da realidade social</strong>. Queremos que qualquer pessoa — estudante, trabalhador, idoso, jovem — consiga entender um contrato, uma intimação ou um termo de uso com segurança e autonomia.
      </Typography>

      <Typography variant="h6" fontWeight="medium" gutterBottom>
        Direito 4.0 com humanidade
      </Typography>
      <Typography variant="body1" paragraph>
        O Direito 4.0 não é só sobre robôs e PJe. É sobre repensar o Direito a partir da tecnologia, <strong>sem perder o olhar humano</strong>. A JurisFácil une criatividade, inovação e utilidade social, partindo de uma escuta sensível às dificuldades reais do cotidiano.
      </Typography>

      <Typography variant="body1" fontWeight="bold" sx={{ mt: 2 }}>
        Porque compreender é o primeiro passo para agir com segurança.
      </Typography>
    </Container>
  );
};

export default Sobre;