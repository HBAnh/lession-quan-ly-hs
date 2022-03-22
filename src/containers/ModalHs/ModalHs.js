import React from "react";
import styles from "./styles";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import * as _modalActions from "../../actions/modal";
import * as _hsActions from "../../actions/hs";
import { Button, Grid, MenuItem } from "@mui/material";
import { Field, reduxForm } from "redux-form";
import renderTextField from "../components/FormHelper/TextField";
import renderSelectField from "../components/FormHelper/SelectField";
import validate from "../components/FormHelper/validate";
import DangerousIcon from "@mui/icons-material/Dangerous";

const ModalHs = (props) => {
  const { classes, open, invalid, submitting, handleSubmit } = props; //invalid vasubmitting lay tu reduxform
  const hsEditing = useSelector((state) => state.hs.hsEditing);
  const dispatch = useDispatch();
  //dong modal
  const handleClose = () => {
    dispatch(_modalActions.hideModal());
  };
  const onHandleCancel = () => {
    dispatch(_modalActions.hideModal());
  };
  // luu lai
  const onHandleSubmit = (data) => {
    const { hoten, tuoi, gioitinh, noisinh } = data;
    if (hsEditing && hsEditing.id) {
      dispatch(_hsActions.updateDanhSachHs(hoten, tuoi, gioitinh, noisinh));
    } else {
      dispatch(_hsActions.addNewHs(hoten, tuoi, gioitinh, noisinh));
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={classes.modalContainers}>
        <div className={classes.modalHead}>
          <span className={classes.title}>Hoc Sinh</span>
          <DangerousIcon
            fontSize="large"
            className={classes.iconClose}
            onClick={handleClose}
          />
        </div>
        <div className={classes.modalContent}>
          <form onSubmit={handleSubmit(onHandleSubmit)}>
            <Grid container spacing={2}>
              <Grid item md={12} className={classes.formText}>
                <Field
                  id="hoten"
                  label="Họ và Tên"
                  className={classes.textField}
                  name="hoten"
                  component={renderTextField}
                />
              </Grid>
              <Grid item md={12} className={classes.formText}>
                <Field
                  id="tuoi"
                  label="Tuổi"
                  className={classes.textField}
                  name="tuoi"
                  type="number"
                  component={renderTextField}
                />
              </Grid>
              <Grid item md={12} className={classes.formSelect}>
                <Field
                  id="gioitinh"
                  label="Giới Tính"
                  className={classes.selectField}
                  name="gioitinh"
                  component={renderSelectField}
                >
                  <MenuItem value={true}>Nam</MenuItem>
                  <MenuItem value={false}>NỮ</MenuItem>
                </Field>
              </Grid>
              <Grid item md={12} className={classes.formText}>
                <Field
                  id="noisinh"
                  label="Nơi Sinh"
                  className={classes.textField}
                  name="noisinh"
                  component={renderTextField}
                />
              </Grid>
              <Grid item md={12} className={classes.formBtn}>
                <Box display="flex" flexDirection="row-reverse" mt={2}>
                  <Button
                    variant="contained"
                    style={{ float: "right" }}
                    onClick={onHandleCancel}
                  >
                    Huỷ Bỏ
                  </Button>
                  <Box mr={1}>
                    <Button
                      variant="contained"
                      type="submit"
                      disabled={invalid || submitting}
                    >
                      Lưu lại
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </Modal>
  );
};

ModalHs.propTypes = {
  classes: PropTypes.object,
  checkOpen: PropTypes.bool,
};

const withReduxForm = reduxForm({
  form: "HS_MANAGEMENT",
  validate,
});

export default withStyles(styles)(withReduxForm(ModalHs));
