import React from "react";
import styles from "./styles";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import * as _modalActions from "../../actions/modal";
import { Button, Grid, MenuItem } from "@mui/material";
import { Field, reduxForm } from "redux-form";
import renderTextField from "../components/FormHelper/TextField";
import renderSelectField from "../components/FormHelper/SelectField";
import validate from "../components/FormHelper/validate";
import DangerousIcon from "@mui/icons-material/Dangerous";

const ModalHs = (props) => {
  const { classes, open, invalid, submitting } = props; //invalid vasubmitting lay tu reduxform
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(_modalActions.hideModal());
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
          <span className={classes.title}>Thêm Học Sinh</span>
          <DangerousIcon
            fontSize="large"  
            className={classes.iconClose}
            onClick={handleClose}
          />
        </div>
        <div className={classes.modalContent}>
          <form>
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
                  <MenuItem value={0}>Nam</MenuItem>
                  <MenuItem value={1}>NỮ</MenuItem>
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
                  <Button variant="contained" style={{ float: "right" }}>
                    Huỷ Bỏ
                  </Button>
                  <Box mr={1}>
                    <Button
                      variant="contained"
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
