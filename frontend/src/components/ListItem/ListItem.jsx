import React, { useCallback, useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import "./style.css";

const ListItem = (props) => {
  // function createData(id, name, value, quantity, expiration_date) {
  //   return { id, name, value, quantity, expiration_date };
  // }

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [rows, setRows] = useState([]);

  const fetchProducts = useCallback(() => {
    fetch("http://localhost:8080/produto")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setRows(json);
      });
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    console.log("aqui");
    if (props.newValue !== null && props.newValue !== undefined) {
      console.log(props.newValue);
      const newRows = [...rows, props.newValue];
      setRows(newRows);
    }
  }, [props.newValue]);

  return (
    <>
      {rows[0] ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 800 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="center" variant="head">
                  ID
                </TableCell>
                <TableCell align="center">Nome</TableCell>
                <TableCell align="center">Valor(R$)</TableCell>
                <TableCell align="center">Validade</TableCell>
                <TableCell align="center">Quantidade</TableCell>
                <TableCell align="center">Contato do Fornecedor</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" align="center" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="center">{row.nome}</TableCell>
                      <TableCell align="center">{row.valor}</TableCell>
                      <TableCell align="center">{row.validade}</TableCell>
                      <TableCell align="center">{row.quantidade}</TableCell>
                      <TableCell align="center">{row.fornecedor}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div className="no-created-product__div">
          <p> Parece que você ainda não criou nenhum produto!</p>
          <p>Que tal fazer isso agora?</p>
        </div>
      )}
      {rows[0] ? (
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      ) : null}
    </>
  );
};

export default ListItem;
