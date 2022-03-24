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
import { useDispatch, useSelector } from "react-redux";
import ModalNamHoc from './components/ModalNamHoc/ModalNamHoc';
import * as _modalActions from '../../actions/modal';

const QuanLyNamHoc = (props) => {
  const { classes } = props;
  const checkOpen = useSelector((state) => state.modal.openModal);

  const dispatch = useDispatch();
  const onHandleThemNamHoc = () => {
    dispatch(_modalActions.showModal());
  }
  const renderDanhSachNamHoc = () => {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{backgroundColor: 'black'}}>
              <TableCell style={{color: 'white'}} align="center">STT</TableCell>
              <TableCell style={{color: 'white'}} align="center">Name</TableCell>
              <TableCell style={{color: 'white'}} align="center">Tasks</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className={classes.tableContent}>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">2020-2021</TableCell>
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
      <h1 className={classes.title}>Quản Lý Năm Học</h1>
      <Button variant="contained" onClick={onHandleThemNamHoc}>Thêm năm học</Button>
      <div className={classes.tableContainer}>
        {renderDanhSachNamHoc()}
        {checkOpen ? <ModalNamHoc open={checkOpen}/> : null}
      </div>
    </div>
  );
};

QuanLyNamHoc.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(QuanLyNamHoc);
