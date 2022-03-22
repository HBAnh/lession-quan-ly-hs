import React, { useEffect } from "react";
import { withStyles } from "@mui/styles";
import styles from "./styles";
import DanhSachHS from "../components/DanhSachHS/DanhSachHS";
import { useDispatch, useSelector } from "react-redux";
import Button from '@mui/material/Button';
import * as _modalActions from '../../actions/modal';
import * as _hsActions from '../../actions/hs';
import ModalHs from '../ModalHs/ModalHs';

const QuanLyHS = (props) => {
  const {classes} = props;
  const dsHs = useSelector(state => state.hs.dsHs)
  const checkOpen = useSelector((state) => state.modal.openModal);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(_hsActions.startFetchHs())
  }, [dispatch]);

  const onHandleCapNhap = () => {
    dispatch(_hsActions.startFetchHs())
  }

  const onHandleThemHs = () => {
    dispatch(_modalActions.showModal());
  }

  const renderDanhSachHs = () => {
    let xhtml = null;
    xhtml = <DanhSachHS dsHs={dsHs}/>
    return xhtml;
  }
  return (
    <div className={classes.containers}>
      <div><h1 className={classes.title}>Quan Ly Hoc Sinh</h1></div>
      <div>
        <Button variant="contained" color="secondary" onClick={onHandleThemHs} >Them Hoc Sinh</Button> &nbsp;
        <Button variant="contained" onClick={onHandleCapNhap} >Cap Nhap</Button>
      </div>
      <div className={classes.tableContainer}>
        {renderDanhSachHs()}
        {checkOpen ? <ModalHs open={checkOpen} /> : null}
      </div>
    </div>
  );
};

export default withStyles(styles)(QuanLyHS);
