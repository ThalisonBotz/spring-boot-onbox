import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import "./style.css";

function CreateItem(props) {
  const [expirationDate, setExpirationDate] = useState(new Date());
  const [id, setId] = useState("");
  const [amount, setAmount] = useState();
  const [name, setName] = useState("");
  const [providerContact, setProviderContact] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isEmpty, setIsEmpty] = useState(false);

  const handleAmountChange = (value) => {
    setAmount(value);
  };

  const handleIdChange = (value) => {
    setId(value);
  };

  const handleProviderContactChange = (value) => {
    setProviderContact(value);
  };

  const handleNameChange = (value) => {
    setName(value);
  };

  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  const handleDateChange = (newValue) => {
    setExpirationDate(new Date(newValue));
  };

  const createProduct = () => {
    const product = {
      id: id,
      validade: new Date(expirationDate).toLocaleString().split(" ")[0],
      nome: name,
      fornecedor: providerContact,
      quantidade: parseInt(quantity),
      valor: parseFloat(amount),
    };
    fetch("http://localhost:8080/produto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        handleCloseModal(json);
      });
  };

  const handleCloseModal = (product) => {
    props.onClose(product);
  };

  const handleAddOne = () => {
    console.log("Add one product");
    setQuantity(parseInt(quantity) + 1);
  };

  const handleRemoveOne = () => {
    console.log("Remove one product");
    setQuantity(parseInt(quantity) - 1);
  };

  return (
    <>
      <Box className="box-modal">
        <div className="input-bottom-margin">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Registrar novo produto
          </Typography>
        </div>
        <div className="create-product__inputs input-bottom-margin firsts_inputs">
          <FormControl fullWidth variant="filled">
            <InputLabel required htmlFor="filled-adornment-amount">
              Valor
            </InputLabel>
            <FilledInput
              id="filled-adornment-amount"
              value={amount}
              onChange={(event) => handleAmountChange(event.target.value)}
              startAdornment={
                <InputAdornment position="start">R$</InputAdornment>
              }
            />
          </FormControl>
        </div>
        <div className="input-bottom-margin">
          <TextField
            required
            className="text-field__mg-right"
            id="filled-basic"
            label="Nome"
            variant="filled"
            fullWidth
            onChange={(event) => handleNameChange(event.target.value)}
          />
        </div>
        <div className="input-bottom-margin">
          <TextField
            required
            className="text-field__mg-right"
            id="filled-basic"
            label="Contato do Fornecedor"
            variant="filled"
            fullWidth
            onChange={(event) =>
              handleProviderContactChange(event.target.value)
            }
          />
        </div>
        <div className="input-bottom-margin">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
              <DesktopDatePicker
                required
                label="Data de validade"
                inputFormat="DD/MM/YYYY"
                value={expirationDate}
                onChange={(value) => handleDateChange(value)}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>
        </div>
        <div className="quantity__input input-bottom-margin">
          <Fab size="small" color="primary" aria-label="remove">
            <RemoveIcon onClick={handleRemoveOne} />
          </Fab>
          <TextField
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            required
            id="outlined-number"
            label="Quantidade"
            type="number"
            value={quantity}
            onChange={(event) => handleQuantityChange(event.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Fab size="small" color="primary" aria-label="add">
            <AddIcon onClick={handleAddOne} />
          </Fab>
        </div>
        <div className="create-new-product__div">
          <Button onClick={createProduct} variant="contained">
            CADASTRAR
          </Button>
        </div>
      </Box>
    </>
  );
}

export default CreateItem;
