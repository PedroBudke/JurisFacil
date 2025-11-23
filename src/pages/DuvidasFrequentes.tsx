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

        // ---------------------------------------------------------
    // DIREITO DO CONSUMIDOR E TECNOLOGIA (PERGUNTAS QUE VOCÊ ENVIOU)
    // ---------------------------------------------------------
    {
      question: 'Quais são os principais direitos do consumidor nas compras online?',
      answer:
        'O consumidor tem direito à informação clara, proteção contra publicidade enganosa, segurança de seus dados e o direito de arrependimento em até 7 dias, conforme o CDC e o Decreto 7.962/2013.',
    },
    {
      question: 'Se um influenciador recomendar um produto com defeito, quem é responsável?',
      answer:
        'A responsabilidade principal é da empresa fornecedora. Porém, se o influenciador omitir que o conteúdo é publicitário, ele também pode responder por falta de transparência.',
    },
    {
      question: 'O que é Inteligência Artificial e como ela é aplicada nos negócios?',
      answer:
        'A Inteligência Artificial consiste em sistemas capazes de aprender e tomar decisões. No mercado, ela é usada para atendimento, análise de dados e automação. No Direito, robôs como o “Victor” auxiliam o STF na triagem de processos.',
    },
    {
      question: 'Blockchain é só para criptomoedas?',
      answer:
        'Não. O blockchain permite registros seguros e transparentes. Ele é usado para rastrear produtos, criar contratos inteligentes e resolver conflitos de forma digital.',
    },
    {
      question: 'A LGPD se aplica ao meu negócio digital?',
      answer:
        'Sim. Toda empresa que trata dados pessoais deve seguir a LGPD, informando finalidades, obtendo consentimento quando necessário e adotando medidas de segurança.',
    },

    // ---------------------------------------------------------
    // PERGUNTAS JURÍDICAS ORIGINAIS
    // ---------------------------------------------------------
    {
      question: 'O que é um contrato e quando ele precisa ser escrito?',
      answer:
        'Um contrato é um acordo que cria direitos e obrigações. Ele pode ser verbal, mas a forma escrita é mais segura, especialmente em situações com valores, prazos ou riscos.',
    },
    {
      question: 'Assinar digitalmente tem o mesmo valor que assinar no papel?',
      answer:
        'Sim. Assinaturas eletrônicas têm validade jurídica no Brasil, desde que identifiquem o assinante e preservem a integridade do documento.',
    },
    {
      question: 'O que é uma cláusula abusiva?',
      answer:
        'É uma condição contratual que coloca o consumidor em desvantagem exagerada ou viola a boa-fé. O CDC proíbe cláusulas abusivas em contratos de consumo.',
    },
    {
      question: 'O que é o direito de arrependimento nas compras online?',
      answer:
        'É a possibilidade de desistir da compra em até 7 dias após o recebimento do produto ou contratação do serviço, com reembolso total.',
    },
    {
      question: 'Preciso ir ao fórum para resolver qualquer problema jurídico?',
      answer:
        'Não. Muitos conflitos podem ser solucionados por mediação, Procon, plataformas digitais ou acordos extrajudiciais.',
    },
    {
      question: 'O que são provas digitais?',
      answer:
        'São evidências obtidas em meios eletrônicos, como prints, e-mails e conversas. Elas podem ser usadas judicialmente, desde que preservem autenticidade e integridade.',
    },
    {
      question: 'Prints de WhatsApp servem como prova?',
      answer:
        'Servem, mas exportar a conversa completa aumenta a credibilidade, pois ajuda a demonstrar o contexto.',
    },
    {
      question: 'O que é responsabilidade civil?',
      answer:
        'É o dever de reparar um dano causado a outra pessoa, podendo envolver indenização por danos materiais, morais ou ambos.',
    },
    {
      question: 'Posso ser responsabilizado por algo que compartilho na internet?',
      answer:
        'Sim. Compartilhar conteúdos ofensivos, ilícitos ou falsos pode gerar responsabilidade civil e, em determinadas situações, criminal.',
    },
    {
      question: 'O que a LGPD protege?',
      answer:
        'A LGPD protege dados pessoais e exige que empresas informem como esses dados são coletados, usados e armazenados.',
    },
    {
      question: 'O que é um Termo de Uso?',
      answer:
        'É o documento que descreve as regras de utilização de um site ou aplicativo. Ao aceitá-lo, o usuário firma um contrato eletrônico.',
    },
    {
      question: 'Comprar de pessoa física pela internet garante direitos do consumidor?',
      answer:
        'Não. O CDC vale para compras feitas de empresas. Entre particulares, aplicam-se as regras do Código Civil.',
    },
    {
      question: 'Qual a diferença entre calúnia, difamação e injúria?',
      answer:
        'Calúnia é acusar falsamente alguém de crime. Difamação é atribuir fato ofensivo à reputação. Injúria é ofender a dignidade de alguém.',
    },
    {
      question: 'Posso processar alguém por ofensa nas redes sociais?',
      answer:
        'Sim. Ofensas podem gerar indenização por danos morais e, em alguns casos, configurar crimes contra a honra.',
    },
    {
      question: 'O que significa foro competente?',
      answer:
        'É o local onde um processo deve tramitar. Em relações de consumo, geralmente é o domicílio do consumidor.',
    },
    {
      question: 'Preciso registrar minha marca ou logo?',
      answer:
        'Sim. Registrar a marca no INPI garante exclusividade de uso e evita conflitos futuros.',
    },
    {
      question: 'Contratos feitos por clique são válidos?',
      answer:
        'Sim. Os contratos eletrônicos firmados por meio de “aceito” são juridicamente válidos e amplamente utilizados no meio digital.',
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