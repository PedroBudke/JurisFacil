// src/pages/DuvidasFrequentes.tsx
import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const DuvidasFrequentes = () => {
  const faqs = [
  {
    question: 'A JurisFácil substitui um advogado?',
    answer: 'Não. Nosso papel é educar e esclarecer, nunca substituir orientação jurídica profissional. Para decisões importantes, sempre consulte um advogado.',
  },
  {
    question: 'Posso usar o conteúdo para estudos?',
    answer: 'Sim! Todo o material é produzido por estudantes de Direito com supervisão acadêmica, pensado especialmente para apoiar a compreensão de conceitos.',
  },
  {
    question: 'Vocês analisam meus contratos?',
    answer: 'Em breve, teremos uma ferramenta para upload e análise simplificada. Por enquanto, explicamos cláusulas comuns e como identificar riscos.',
  },
  {
    question: 'O que é “Direito 4.0”?',
    answer: 'É a integração do Direito com tecnologias digitais: inteligência artificial, blockchain, PJe, robôs de triagem. A JurisFácil traduz essas inovações para o cidadão.',
  },
  {
      question: 'Quem desenvolve o conteúdo da JurisFácil?',
      answer: 'O conteúdo é produzido por estudantes de Direito em constante formação, sempre baseado em fontes confiáveis e revisado academicamente para garantir clareza e segurança.',
  },
];

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Dúvidas Frequentes
      </Typography>
      <Typography variant="body1" paragraph>
        Encontre respostas para as perguntas mais comuns sobre o JurisFacil e temas jurídicos básicos.
      </Typography>

      <Box sx={{ mt: 3 }}>
        {faqs.map((faq, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight="fontWeightMedium">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary">{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};

export default DuvidasFrequentes;