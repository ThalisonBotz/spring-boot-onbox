import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import ListItem from "../../components/ListItem/ListItem";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import HomeIcon from "@mui/icons-material/Home";
import CreateItem from "../../components/Create-Item";
import "./style.css";
import Footer from "../../components/Footer";

function List() {
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const handleGoHomeBtn = () => {
    navigate("/");
  };

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
          <button className="home_btn" onClick={handleGoHomeBtn}>
            <HomeIcon />
            Sair
          </button>
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
