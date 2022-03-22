import React from "react";
import { withStyles } from "@mui/styles";
import styles from "./styles";
import PropTypes from "prop-types";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ChiTietHS from "../ChiTietHS/ChiTietHS";
const DanhSachHS = (props) => {
  const { classes, danhSachHs, onClickEdit, onClickDelete } = props;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className={classes.tableHead}>
          <TableRow className={classes.rowHead}>
            <TableCell align="center">STT</TableCell>
            <TableCell align="center">HoTen</TableCell>
            <TableCell align="center">Tuoi</TableCell>
            <TableCell align="center">GioiTinh</TableCell>
            <TableCell align="center">NoiSinh</TableCell>
            <TableCell align="center">Hành Động</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {danhSachHs.map((hocSinh, index) => {
            return (
              <ChiTietHS
                key={hocSinh.id}
                index={index}
                hocSinh={hocSinh}
                onClickEdit={() => onClickEdit(hocSinh)}
                onClickDelete={() => onClickDelete(hocSinh.id)}
              />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

DanhSachHS.propTypes = {
  classes: PropTypes.object,
  onClickEdit: PropTypes.func,
  onClickDelete: PropTypes.func,
};

export default withStyles(styles)(DanhSachHS);
