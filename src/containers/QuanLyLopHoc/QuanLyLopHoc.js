import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { withStyles } from "@mui/styles";
import styles from "./styles";
import PropTypes from "prop-types";
import DanhSachLopHoc from "./components/DanhSachLopHoc/DanhSachLopHoc";
import { useDispatch, useSelector } from "react-redux";
import ModalLopHoc from "./components/ModalLopHoc/ModalLopHoc";
import * as _lopHocActions from "../../actions/lopHoc";
import * as _modalActions from "../../actions/modal";

const QuanLyLopHoc = (props) => {
  const { classes } = props;
  const checkOpen = useSelector((state) => state.modal.openModal);
  const listLopHoc = useSelector((state) => state.lopHoc.listLopHoc);
  const initialValues = useSelector((state) => state.lopHoc.lopHocEditing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(_lopHocActions.getListLopHoc());
  }, [dispatch]);

  const onSaveLopHoc = (dataEditing) => {
    dispatch(_lopHocActions.setLopHocEditing(dataEditing ? dataEditing : null));
    dispatch(_modalActions.showModal());
  };

  const onDeleteLopHoc = (_data) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm(`Bạn có chắc muốn xoá lớp ${_data.name}?`)) {
      dispatch(_lopHocActions.deleteLopHoc(_data.id));
    }
  };

  const renderDanhSachlopHoc = () => {
    return (
      <DanhSachLopHoc
        listLopHoc={listLopHoc}
        onHandleEdit={onSaveLopHoc}
        onHandleDelete={(_data) => onDeleteLopHoc(_data)}
      />
    );
  };
  return (
    <div className={classes.containers}>
      <h1 className={classes.title}>Quản Lý Lớp Học</h1>
      <Button variant="contained" onClick={onSaveLopHoc}>
        Thêm lớp học
      </Button>
      <div className={classes.tableContainer}>
        {renderDanhSachlopHoc()}
        {checkOpen ? (
          <ModalLopHoc open={checkOpen} initialValues={initialValues} />
        ) : null}
      </div>
    </div>
  );
};

QuanLyLopHoc.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(QuanLyLopHoc);
