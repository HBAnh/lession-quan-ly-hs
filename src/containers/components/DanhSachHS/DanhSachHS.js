import React from "react";
import { withStyles } from "@mui/styles";
import styles from "./styles";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ChiTietHS from '../ChiTietHS/ChiTietHS';
const DanhSachHS = (props) => {
  const {classes, dsHS} = props;
  return (
    <TableContainer component={Paper} >
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead className={classes.tableHead}>
        <TableRow className={classes.rowHead}>
          <TableCell align="center">STT</TableCell>
          <TableCell align="center">HoTen</TableCell>
          <TableCell align="center">Tuoi</TableCell>
          <TableCell align="center">GioiTinh</TableCell>
          <TableCell align="center">NoiSinh</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          dsHS.map((hs, index) => {
            return (
              <ChiTietHS key={hs.id} hs={hs} index={index} />
            )
          })
        }
      </TableBody>
    </Table>
  </TableContainer>)
};

export default withStyles(styles)(DanhSachHS);