import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import ListItem from "../../components/ListItem/ListItem";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import HomeIcon from "@mui/icons-material/Home";
import CreateItem from "../../components/Create-Item";
import "./style.css";
import Footer from "../../components/Footer";

function List() {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <CreateItem />
        </>
      </Modal>
      <Header title="Movimentação Geral" />

      <div className="container">
        <div className="container-btn">
          <Link to={`/`}>
            <Button
              className="home_btn"
              variant="contained"
              startIcon={<HomeIcon />}
            >
              Sair
            </Button>
          </Link>
          <input
            className="btn__add-new-product"
            type="button"
            value="Criar novo produto"
            onClick={handleOpenModal}
          />
        </div>

        <div className="container-table">
          <ListItem />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default List;
