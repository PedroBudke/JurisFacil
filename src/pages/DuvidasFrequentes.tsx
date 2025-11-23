// src/pages/DuvidasFrequentes.tsx
import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const DuvidasFrequentes = () => {
  const faqs = [
    // -----------------------
    // DIREITO PENAL
    // -----------------------
    {
      question: 'O que é flagrante delito?',
      answer:
        'É quando alguém é pego no momento em que está cometendo um crime, acabando de cometê-lo ou logo após ser perseguido por alguém. Nesses casos, a prisão pode ser feita imediatamente.',
    },
    {
      question: 'Posso ser preso por não pagar pensão alimentícia?',
      answer:
        'Sim. A prisão civil ocorre quando o devedor deixa de pagar as três últimas parcelas recentes da pensão. O objetivo não é punir, mas forçar o pagamento.',
    },
    {
      question: 'Qual a diferença entre crime doloso e culposo?',
      answer:
        'No crime doloso, a pessoa tem intenção de cometer o ato. No culposo, ela não quer o resultado, mas age com descuido, imprudência ou imperícia.',
    },
    {
      question: 'O que significa haver “legítima defesa”?',
      answer:
        'É quando alguém reage, de forma moderada, a uma agressão injusta. Se comprovada, a conduta pode ser considerada lícita.',
    },
    {
      question: 'Posso responder criminalmente por algo publicado na internet?',
      answer:
        'Sim. Crimes contra a honra (calúnia, difamação e injúria), discurso de ódio, ameaças e divulgação de intimidade podem gerar processos penais.',
    },

    // -----------------------
    // DIREITO DO CONSUMIDOR
    // -----------------------
    {
      question: 'A loja pode se negar a trocar um produto que não gostei?',
      answer:
        'Sim, a troca por “desistência” é uma cortesia, não uma obrigação. A troca obrigatória só existe em caso de defeito.',
    },
    {
      question: 'Comprei pela internet e me arrependi. Posso devolver?',
      answer:
        'Sim. Em compras online, o direito de arrependimento garante devolução em até 7 dias contados do recebimento.',
    },
    {
      question: 'Quem é responsável pelo atraso na entrega de um produto?',
      answer:
        'A empresa vendedora responde pela entrega. Mesmo que use transportadora, ela deve solucionar o problema e garantir assistência ao consumidor.',
    },
    {
      question: 'O que é venda casada?',
      answer:
        'É quando o consumidor é obrigado a comprar um produto ou serviço para adquirir outro. Essa prática é proibida pelo CDC.',
    },
    {
      question: 'Quando posso pedir indenização por dano moral como consumidor?',
      answer:
        'Quando houver violação dos seus direitos, como cobrança indevida repetida, exposição ao ridículo, negativa injusta de serviço essencial ou falhas graves na relação de consumo.',
    },

    // -----------------------
    // DIREITO CIVIL
    // -----------------------
    {
      question: 'O que é responsabilidade civil por danos?',
      answer:
        'É a obrigação de reparar prejuízos causados a outra pessoa, podendo envolver danos materiais, morais ou ambos.',
    },
    {
      question: 'Posso fazer um contrato verbal?',
      answer:
        'Sim. Contratos verbais são válidos, mas difíceis de provar. Sempre que possível, prefira formalizar por escrito.',
    },
    {
      question: 'O que acontece se alguém descumprir um contrato?',
      answer:
        'O inadimplente pode ter que pagar multa, juros, perdas e danos e até responder judicialmente, dependendo do acordo firmado.',
    },
    {
      question: 'O que é usucapião?',
      answer:
        'É a aquisição da propriedade pela posse prolongada, pacífica e com requisitos legais específicos. Pode ser urbana, rural ou familiar.',
    },
    {
      question: 'Como funciona a guarda compartilhada?',
      answer:
        'É a divisão equilibrada das responsabilidades parentais. Ambos os pais participam das decisões importantes, mesmo que a criança more com apenas um deles.',
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