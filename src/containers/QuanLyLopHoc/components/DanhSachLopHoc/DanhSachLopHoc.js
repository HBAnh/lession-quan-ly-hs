import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import ChiTietLopHoc from "../ChiTietLopHoc/ChiTietLopHoc";
const DanhSachLopHoc = (props) => {
  const { listLopHoc, onHandleEdit, onHandleDelete } = props;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{ backgroundColor: "black" }}>
            <TableCell style={{ color: "white" }} align="center">
              STT
            </TableCell>
            <TableCell style={{ color: "white" }} align="center">
              Tên Lớp
            </TableCell>
            <TableCell style={{ color: "white" }} align="center">
              Khối Lớp
            </TableCell>
            <TableCell style={{ color: "white" }} align="center">
              Tasks
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listLopHoc.map((lopHoc, index) => {
            return (
              <ChiTietLopHoc
                key={lopHoc.id}
                index={index}
                lopHoc={lopHoc}
                onClickEdit={() => onHandleEdit(lopHoc)}
                onClickDelete={() => onHandleDelete(lopHoc)}
              />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DanhSachLopHoc;
