import React from "react";
import { withStyles } from "@mui/styles";
import styles from "./styles";
import { Button, TableCell, TableRow } from "@mui/material";

const ChiTietHS = (props) => {
  const { classes, hs, index } = props;
  const { id, hoten, tuoi, gioitinh, noisinh } = hs;
  return (
    <TableRow className={classes.tableContent} key={id}>
      <TableCell align="center">{index + 1}</TableCell>
      <TableCell align="center">{hoten}</TableCell>
      <TableCell align="center">{tuoi}</TableCell>
      <TableCell align="center">{gioitinh ? "Nam" : "Nu"}</TableCell>
      <TableCell align="center">{noisinh}</TableCell>
      <TableCell align="center">
        <Button variant="outlined" color="success">Sửa</Button>&nbsp;
        <Button variant="outlined" color="error">Xoá</Button>
      </TableCell>
    </TableRow>
  );
};

export default withStyles(styles)(ChiTietHS);
