import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
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
import "./style.css";

function CreateItem() {
  const dateTest = new Date();

  const [expirationDate, setExpirationDate] = useState(dayjs(dateTest));
  const [id, setId] = useState("");
  const [amount, setAmount] = useState();
  const [name, setName] = useState("");
  const [providerContact, setProviderContact] = useState("");
  const [quantity, setQuantity] = useState();

  const handleExpirationDateChange = (value) => {
    setExpirationDate(value);
  };

  const handleAmountChange = (value) => {
    setAmount(value);
    console.log("amount", amount);
  };

  const handleIdChange = (value) => {
    setId(value);
    console.log("id", id);
  };

  const handleProviderContactChange = (value) => {
    setProviderContact(value);
    console.log("provider contact", providerContact);
  };

  const handleNameChange = (value) => {
    setName(value);
    console.log("name", name);
  };

  const handleQuantityChange = (value) => {
    setQuantity(value);
    console.log("quantity", quantity);
  };

  const handleDateChange = (newValue) => {
    setExpirationDate(newValue);
    console.log("date", expirationDate);
  };

  const [values, setValues] = React.useState({
    amount: "",
  });

  return (
    <>
      <Box className="box-modal">
        <div className="input-bottom-margin">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Registrar novo produto
          </Typography>
        </div>
        <div className="create-product__inputs input-bottom-margin firsts_inputs">
          <TextField
            className="text-field__mg-right"
            id="filled-basic"
            label="ID"
            variant="filled"
            onChange={(value) => handleIdChange(value)}
          />
          <FormControl fullWidth sx={{ m: 1 }} variant="filled">
            <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
            <FilledInput
              id="filled-adornment-amount"
              value={amount}
              onChange={(value) => handleAmountChange(value)}
              startAdornment={
                <InputAdornment position="start">R$</InputAdornment>
              }
            />
          </FormControl>
        </div>
        <div className="input-bottom-margin">
          <TextField
            className="text-field__mg-right"
            id="filled-basic"
            label="Nome"
            variant="filled"
            fullWidth
            onChange={(value) => handleNameChange(value)}
          />
        </div>
        <div className="input-bottom-margin">
          <TextField
            className="text-field__mg-right"
            id="filled-basic"
            label="Contato do Fornecedor"
            variant="filled"
            fullWidth
            onChange={(value) => handleProviderContactChange(value)}
          />
        </div>
        <div className="input-bottom-margin">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
              <DesktopDatePicker
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
            <RemoveIcon />
          </Fab>
          <TextField
            id="outlined-number"
            label="Quantidade"
            type="number"
            onChange={(value) => handleQuantityChange(value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Fab size="small" color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </div>
      </Box>
    </>
  );
}

export default CreateItem;
