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
  const { onClickEdit, onClickDelete, listStudent } = props;
  const renderDanhSach = () => {
    let xhtml = null;
    if (listStudent) {
      xhtml = listStudent.map((student, index) => {
        return (
          <ChiTietHS
            key={student?.id}
            index={index}
            student={student}
            onClickEdit={() => onClickEdit(student)}
            onClickDelete={() => onClickDelete(student)}
          />
        );
      });
    }
    return xhtml;
  };
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 450 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center">STT</TableCell>
              <TableCell align="center">Họ & Tên</TableCell>
              <TableCell align="center">Ngày Sinh</TableCell>
              <TableCell align="center">Giới Tính</TableCell>
              <TableCell align="center">Nơi Sinh</TableCell>
              <TableCell align="center">Tasks</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderDanhSach()}</TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

DanhSachHS.propTypes = {
  classes: PropTypes.object,
  onClickEdit: PropTypes.func,
  onClickDelete: PropTypes.func,
};

export default withStyles(styles)(DanhSachHS);
