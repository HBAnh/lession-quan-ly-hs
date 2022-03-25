import React, { useEffect } from "react";
import { withStyles } from "@mui/styles";
import styles from "./styles";
import DanhSachHS from "./components/DanhSachHS/DanhSachHS";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import * as _modalActions from "../../actions/modal";
import * as _hsActions from "../../actions/hs";
import ModalHs from "./components/ModalHs/ModalHs";
import PropTypes from "prop-types";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const QuanLyHocSinh = (props) => {
  const { classes } = props;
  const checkOpen = useSelector((state) => state.modal.openModal);
  const danhSachHs = useSelector((state) => state.hs.dsHs);
  const initialValues = useSelector((state) => state.hs.hsEditing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(_hsActions.startFetchHs());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
  const onHandleChange = (e) => {
    const target = e.target;
    console.log(target.value);
  };
  const renderDanhSachHs = () => {
    let xhtml = null;
    xhtml = (
      <DanhSachHS
        danhSachHs={danhSachHs}
        onClickEdit={onHandleShowModal}
        onClickDelete={(_data) => onHandleXoaHs(_data)}
      />
    );
    return xhtml;
  };
  return (
    <div className={classes.containers}>
      <div>
        <h1 className={classes.title}>
          Quản Lý Học Sinh
        </h1>
      </div>
      <div className={classes.titleClass}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl sx={{minWidth: 200}}>
            <InputLabel id="demo-simple-select-label">Lớp Học</InputLabel>
            <Select
              // value={class}
              label="Lớp Học"
              onChange={onHandleChange}
            >
              <MenuItem value={0}>Lớp 10A1</MenuItem>
              <MenuItem value={1}>Lớp 10A2</MenuItem>
              <MenuItem value={2}>Lớp 10A3</MenuItem>
            </Select>
          </FormControl>
          <Button
            style={{ marginLeft: "20px", height: 55 }}
            variant="contained"
            onClick={onHandleShowModal}
          >
            Thêm Học Sinh
          </Button>
        </Box>
      </div>
      <div className={classes.tableContainer}>
        {renderDanhSachHs()}
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
