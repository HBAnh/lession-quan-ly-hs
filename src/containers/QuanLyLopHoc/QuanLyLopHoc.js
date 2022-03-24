import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { withStyles } from "@mui/styles";
import styles from "./styles";
import PropTypes from "prop-types";

const QuanLyLopHoc = (props) => {
  const { classes } = props;
  const renderDanhSachlopHoc = () => {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ backgroundColor: "black" }}>
              <TableCell style={{ color: "white" }} align="center">
                STT
              </TableCell>
              <TableCell style={{ color: "white" }} align="center">
                Name
              </TableCell>
              <TableCell style={{ color: "white" }} align="center">
                Tasks
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className={classes.tableContent}>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">Lớp 10 - A1</TableCell>
              <TableCell align="center">
                <Button variant="outlined" color="success">
                  Sửa
                </Button>
                &nbsp;
                <Button variant="outlined" color="error">
                  Xoá
                </Button>
              </TableCell>
            </TableRow>
            <TableRow className={classes.tableContent}>
              <TableCell align="center">2</TableCell>
              <TableCell align="center">Lớp 10 - A2</TableCell>
              <TableCell align="center">
                <Button variant="outlined" color="success">
                  Sửa
                </Button>
                &nbsp;
                <Button variant="outlined" color="error">
                  Xoá
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
  return (
    <div className={classes.containers}>
      <h1 className={classes.title}>Quản Lý Lớp Học</h1>
      <Button variant="contained">Thêm lớp học</Button>
      <div className={classes.tableContainer}>{renderDanhSachlopHoc()}</div>
    </div>
  );
};

QuanLyLopHoc.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(QuanLyLopHoc);
