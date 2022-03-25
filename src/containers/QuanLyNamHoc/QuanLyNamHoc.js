import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { withStyles } from "@mui/styles";
import styles from "./styles";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import ModalNamHoc from "./components/ModalNamHoc/ModalNamHoc";
import DanhSachNamHoc from "./components/DanhSachNamHoc/DanhSachNamHoc";
import * as _modalActions from "../../actions/modal";
import * as _namHocActions from "../../actions/namHoc";

const QuanLyNamHoc = (props) => {
  const { classes } = props;
  const checkOpen = useSelector((state) => state.modal.openModal);
  const initialValues = useSelector((state) => state.namHoc.namHocEditing);
  const listNamHoc = useSelector((state) => state.namHoc.listNamHoc);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(_namHocActions.fetchListNamHoc());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onHandleSaveNamHoc = (namHocEditing) => {
    dispatch(
      _namHocActions.setNamHocEditing(namHocEditing ? namHocEditing : null)
    );
    dispatch(_modalActions.showModal());
  };

  const onHandleLickDelete = (_data) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm(`bạn có muốn xoá năm học ${_data.nam}?`))
      dispatch(_namHocActions.deleteNamHoc(_data.id));
  };

  const renderDanhSachNamHoc = () => {
    return (
      <DanhSachNamHoc
        listNamHoc={listNamHoc}
        onClickEdit={onHandleSaveNamHoc}
        onClickDelete={(_data) => onHandleLickDelete(_data)}
      />
    );
  };
  return (
    <div className={classes.containers}>
      <h1 className={classes.title}>Quản Lý Năm Học</h1>
      <Button variant="contained" onClick={onHandleSaveNamHoc}>
        Thêm năm học
      </Button>
      <div className={classes.tableContainer}>
        {renderDanhSachNamHoc()}
        {checkOpen ? (
          <ModalNamHoc open={checkOpen} initialValues={initialValues} />
        ) : null}
      </div>
    </div>
  );
};

QuanLyNamHoc.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(QuanLyNamHoc);
