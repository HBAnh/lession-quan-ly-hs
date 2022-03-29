import React from "react";
import ChiTietNamHoc from "../ChiTietNamHoc/ChiTietNamHoc";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const DanhSachNamHoc = (props) => {
  const { listNamHoc,onClickEdit, onClickDelete } = props;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{ backgroundColor: "black" }}>
            <TableCell style={{ color: "white" }} align="center">
              STT
            </TableCell>
            <TableCell style={{ color: "white" }} align="center">
              Từ Năm
            </TableCell>
            <TableCell style={{ color: "white" }} align="center">
              Đến Năm
            </TableCell>
            <TableCell style={{ color: "white" }} align="center">
              Tasks
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listNamHoc.map((namHoc, index) => {
            return (
              <ChiTietNamHoc 
                key={namHoc?.id} 
                index={index} 
                namHoc={namHoc} 
                onClickEdit={() => onClickEdit(namHoc)}
                onClickDelete={() => onClickDelete(namHoc)}/>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DanhSachNamHoc;
