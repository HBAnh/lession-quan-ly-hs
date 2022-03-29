import React, { useEffect, useState } from "react";
import { withStyles } from "@mui/styles";
import styles from "./styles";
import DanhSachHS from "./components/DanhSachHS/DanhSachHS";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import * as _modalActions from "../../actions/modal";
import * as _studentClassAction from "../../actions/studentClass";
import ModalHs from "./components/ModalHs/ModalHs";
import PropTypes from "prop-types";
import YearSelect from "./Shares/YearSelect";
import ClassSelect from "./Shares/ClassSelect";

const QuanLyHocSinh = (props) => {
  const { classes } = props;
  const [schoolYearId, setSchoolYearId] = useState(0);
  const [classId, setClassId] = useState(0);
  const listStudentClass = useSelector(
    (state) => state.studentClass.listStudentclass
  );
  const checkOpen = useSelector((state) => state.modal.openModal);
  const initialValues = useSelector((state) => state.studentClass.studentEditing);
  const dispatch = useDispatch();
  useEffect(() => {
    if (schoolYearId && classId) {
      loadData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [schoolYearId, classId, initialValues]);
  const loadData = () => {
    dispatch(_studentClassAction.getByYearClass(schoolYearId, classId));
  }
  const onHandleShowModal = (editingHs) => {
    dispatch(_studentClassAction.setStudentClassEditing(editingHs ? editingHs : null));
    dispatch(_modalActions.showModal());
  };
  const onHandleXoaHs = (data) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm(`ban co chac muon xoa  ${data.name} ?`)) {
      const dataDelete = {
        ...data,
        schoolYearId,
        classId,
      };
      dispatch(_studentClassAction.deleteStudentClass(dataDelete));
    }
  };
  const onYearChange = (value) => {
    setSchoolYearId(value);
  };
  const onClassChange = (value) => {
    setClassId(value);
  };
  const onSubmit = (data) => {
    const studentId = initialValues.id;
    const dataPost = {
      ...data,
      schoolYearId,
      classId,
      studentId,
    };
    dispatch(_studentClassAction.saveStudentClass(dataPost));
    loadData();
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
            Thêm mới HS
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
          <ModalHs
            open={checkOpen}
            initialValues={initialValues}
            onSubmit={(_data) => onSubmit(_data)}
          />
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
