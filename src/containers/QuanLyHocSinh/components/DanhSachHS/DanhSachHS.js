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
  const {  danhSachHs, onClickEdit, onClickDelete } = props;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor: 'black'}}>
            <TableCell style={{color: 'white'}} align="center">STT</TableCell>
            <TableCell style={{color: 'white'}} align="center">Name</TableCell>
            <TableCell style={{color: 'white'}} align="center">Birthday</TableCell>
            <TableCell style={{color: 'white'}} align="center">Gender</TableCell>
            <TableCell style={{color: 'white'}} align="center">HomeTown</TableCell>
            <TableCell style={{color: 'white'}} align="center">Tasks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {danhSachHs.map((student, index) => {
            return (
              <ChiTietHS
                key={student?.id}
                index={index}
                student={student}
                onClickEdit={() => onClickEdit(student)}
                onClickDelete={() => onClickDelete(student)}
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
