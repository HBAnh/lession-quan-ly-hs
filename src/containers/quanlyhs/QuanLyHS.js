import React, { useEffect } from "react";
import { withStyles } from "@mui/styles";
import styles from "./styles";
import DanhSachHS from "../components/DanhSachHS/DanhSachHS";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import * as _modalActions from "../../actions/modal";
import * as _hsActions from "../../actions/hs";
import ModalHs from "../ModalHs/ModalHs";
import PropTypes from "prop-types";

const QuanLyHS = (props) => {
  const { classes } = props;
  const checkOpen = useSelector((state) => state.modal.openModal);
  const danhSachHs = useSelector((state) => state.hs.dsHs);
  const initialValues = useSelector((state) => state.hs.hsEditing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(_hsActions.startFetchHs());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const onHandleShowModal = () => {
    dispatch(_hsActions.setHsEditing(null));
    dispatch(_modalActions.showModal());
  };
  const onHandleSuaHs = (editingHs) => {
    dispatch(_hsActions.setHsEditing(editingHs));
    dispatch(_modalActions.showModal());
  };
  const onHandleXoaHs = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("ban co chac muon xoa ?")) {
      dispatch(_hsActions.deleteDanhSachHs(id));
    }
    dispatch(_hsActions.startFetchHs());
  };
  const renderDanhSachHs = () => {
    let xhtml = null;
    xhtml = (
      <DanhSachHS
        danhSachHs={danhSachHs}
        onClickEdit={onHandleSuaHs}
        onClickDelete={onHandleXoaHs}
      />
    );
    return xhtml;
  };
  return (
    <div className={classes.containers}>
      <div>
        <h1 className={classes.title}>Quan Ly Hoc Sinh</h1>
      </div>
      <div>
        <Button
          variant="contained"
          color="secondary"
          onClick={onHandleShowModal}
        >
          Them Hoc Sinh
        </Button>
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

QuanLyHS.propTypes = {
  classes: PropTypes.object,
  checkOpen: PropTypes.bool,
};
export default withStyles(styles)(QuanLyHS);
