import React from "react";
import { withStyles } from "@mui/styles";
import styles from "./styles";
import { Button, TableCell, TableRow } from "@mui/material";
import PropTypes from "prop-types";

const ChiTietHS = (props) => {
  const { classes, student, index, onClickEdit, onClickDelete } = props;
  const { id, name, birthday, gender, homeTown } = student;
  return (
    <TableRow className={classes.tableContent} key={id}>
      <TableCell align="center">{index + 1}</TableCell>
      <TableCell align="center">{name}</TableCell>
      <TableCell align="center">{birthday}</TableCell>
      <TableCell align="center">{gender ? "Nam" : "Nu"}</TableCell>
      <TableCell align="center">{homeTown}</TableCell>
      <TableCell align="center">
        <Button variant="outlined" color="success" onClick={onClickEdit}>
          Sửa
        </Button>
        &nbsp;
        <Button variant="outlined" color="error" onClick={onClickDelete}>
          Xoá
        </Button>
      </TableCell>
    </TableRow>
  );
};

ChiTietHS.propTypes = {
  classes: PropTypes.object,
  onClickEdit: PropTypes.func,
  onClickDelete: PropTypes.func,
};
export default withStyles(styles)(ChiTietHS);
