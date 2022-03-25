import { Button, TableCell, TableRow } from "@mui/material";
import React from "react";

const ChiTietNamHoc = (props) => {
  const { namHoc, index, onClickEdit, onClickDelete } = props;
  return (
    <TableRow>
      <TableCell align="center">{index + 1}</TableCell>
      <TableCell align="center">{namHoc.name}</TableCell>
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

export default ChiTietNamHoc;
