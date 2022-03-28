import React, { useEffect, useState } from "react";
import { withStyles } from "@mui/styles";
import styles from "./styles";
import DanhSachHS from "./components/DanhSachHS/DanhSachHS";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import * as _modalActions from "../../actions/modal";
import * as _hsActions from "../../actions/hs";
import * as _studentClassAction from "../../actions/studentClass";
import ModalHs from "./components/ModalHs/ModalHs";
import PropTypes from "prop-types";
import YearSelect from "./Shares/YearSelect";
import ClassSelect from "./Shares/ClassSelect";

const QuanLyHocSinh = (props) => {
  const { classes } = props;
  const [yearId, setYearId] = useState(0);
  const [classId, setClassId] = useState(0);
  const listStudentClass = useSelector((state) => state.studentClass.listStudentclass);
  console.log(listStudentClass);
  const checkOpen = useSelector((state) => state.modal.openModal);
  const initialValues = useSelector((state) => state.hs.hsEditing);
  const dispatch = useDispatch();

  useEffect(() => {
    if (yearId) {
      if (classId) {
        dispatch(_studentClassAction.getByYearClass(yearId, classId));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [yearId, classId]);


  const onHandleShowModal = (editingHs) => {
    dispatch(_hsActions.setHsEditing(editingHs ? editingHs : null));
    dispatch(_modalActions.showModal());
  };
  const onHandleXoaHs = (data) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm(`ban co chac muon xoa  ${data.name} ?`)) {
      dispatch(_hsActions.deleteDanhSachHs(data.id));
    }
  };
  const onYearChange = (value) => {
    setYearId(value);
  };
  const onClassChange = (value) => {
    setClassId(value);
  };

  return (
    <div className={classes.containers}>
      <div>
        <h1 className={classes.title}>QUẢN LÝ HỌC SINH</h1>
        <div className={classes.selectControls}>
          {/* select nam hoc */}
          Năm Học: <YearSelect onChange={(s) => onYearChange(s)} />
          {/* select lop hoc */}
          Lớp Học: <ClassSelect onChange={(s) => onClassChange(s)} />
          {/* button them hoc sinh */}
          <Button
            style={{ marginLeft: 10 }}
            variant="contained"
            onClick={onHandleShowModal}
          >
            Thêm Học Sinh
          </Button>
        </div>
      </div>
      <div className={classes.tableContainer}>
        <DanhSachHS
          listStudent={listStudentClass}
          onClickEdit={onHandleShowModal}
          onClickDelete={(_data) => onHandleXoaHs(_data)}
        />
        {checkOpen ? (
          <ModalHs open={checkOpen} initialValues={initialValues} />
        ) : null}
      </div>
    </div>
  );
};

QuanLyHocSinh.propTypes = {
  classes: PropTypes.object,
  checkOpen: PropTypes.bool,
};

export default withStyles(styles)(QuanLyHocSinh);
