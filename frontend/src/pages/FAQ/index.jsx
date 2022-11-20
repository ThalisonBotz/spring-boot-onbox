import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./style.css";

function FAQ() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Header title="Frequently Asked Questions" />

      <div>
        <Link to={`/`}>
          <IconButton aria-label="home" className="home-btn__icon" size="large">
            <HomeIcon />
          </IconButton>
        </Link>
      </div>

      <div className="general-faq-container">
        <div className="faq-container">
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography>O serviço é realmente gratuito?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Sim! O OnBox é totalmente gratuito. Pra sempre!
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography>
                Posso ter mais de um estabelecimento cadastrado no OnBox?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Sim! É só criar um usuário para cada estabelecimento que você
                possuir.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography>Consigo alterar produtos do meu estoque?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Sim! Basta clicar no botão de "Lápis" ao lado do produto na tela
                de listagem.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography>Consigo excluir produtos do meu estoque?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Sim! Basta clicar no botão de "Lápis" ao lado do produto na tela
                de listagem e clicar em "Deletar Produto".
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5bh-content"
              id="panel5bh-header"
            >
              <Typography>O serviço disponibiliza Nota Fiscal?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Não. Já que o objetivo do OnBox não está ligado a gerar notas
                fiscais, mas sim organizar seu estoque e facilitar sua vida!
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel6bh-content"
              id="panel6bh-header"
            >
              <Typography>
                Em qual região este serviço está disponível?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                O OnBox está disponível para todos os lugares do Brasil! Basta
                acessar nosso site e usar.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default FAQ;
