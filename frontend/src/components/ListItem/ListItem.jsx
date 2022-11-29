import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";

const ListItem = () => {
  function createData(id, name, value, quantity, expiration_date) {
    return { id, name, value, quantity, expiration_date };
  }

  const rows = [
    createData(1, "Caixa", 6.0, 24, "12/03/2024"),
    createData(2, "Arroz", 9.0, 37, "12/03/2024"),
    createData(3, "Macarrão", 16.0, 24, "12/03/2024"),
    createData(4, "Massa de Pastel", 3.7, 67, "12/03/2024"),
    createData(5, "Frango", 16.0, 49, "12/03/2024"),
  ];

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 800 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Nome</TableCell>
              <TableCell align="center">Valor(R$)</TableCell>
              <TableCell align="center">Quantidade</TableCell>
              <TableCell align="center">Validade</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" align="center" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.value}</TableCell>
                <TableCell align="center">{row.quantity}</TableCell>
                <TableCell align="center">{row.expiration_date}</TableCell>
                <TableCell align="center">
                  <IconButton aria-label="edit">
                    <ModeEditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ListItem;
