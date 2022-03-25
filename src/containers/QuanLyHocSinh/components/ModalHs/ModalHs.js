import React from "react";
import styles from "./styles";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import * as _modalActions from "../../../../actions/modal";
import * as _hsActions from "../../../../actions/hs";
import { Button, Grid, MenuItem } from "@mui/material";
import { Field, reduxForm } from "redux-form";
import renderTextField from "../../../components/FormHelper/TextField";
import renderSelectField from "../../../components/FormHelper/SelectField";
import {validateHocSinh} from "../../../components/FormHelper/validate";
import DangerousIcon from "@mui/icons-material/Dangerous";

const ModalHs = (props) => {
  const { classes, open, invalid, submitting, handleSubmit } = props; //invalid vasubmitting lay tu reduxform
  const dispatch = useDispatch();
  //dong modal
  const handleClose = () => {
    dispatch(_modalActions.hideModal());
  };
  // luu lai
  const onHandleSubmit = (data) => {
    dispatch(_hsActions.saveStudent(data));
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
                fullWidth
                  id="name"
                  label="Họ và Tên"
                  className={classes.textField}
                  name="name"
                  component={renderTextField}
                />
              </Grid>
              {/* <Grid item md={12} className={classes.formText}>
                 <Field
                  id="birthday"
                  label="Ngày Sinh"
                  className={classes.textField}
                  name="birthday"
                  component={renderTextField}
                  type="datetime"
                /> *
              </Grid> */}
              <Grid item md={12} className={classes.formSelect}>
                <Field
                fullWidth
                  id="gender"
                  label="Giới Tính"
                  className={classes.selectField}
                  name="gender"
                  component={renderSelectField}
                >
                  <MenuItem value={true}>Nam</MenuItem>
                  <MenuItem value={false}>NỮ</MenuItem>
                </Field>
              </Grid>
              <Grid item md={12} className={classes.formText}>
                <Field
                fullWidth
                  id="homeTown"
                  label="Nơi Sinh"
                  className={classes.textField}
                  name="homeTown"
                  component={renderTextField}
                />
              </Grid>
              <Grid item md={12} className={classes.formBtn}>
                <Box display="flex" flexDirection="row-reverse" mt={2}>
                  <Button
                    variant="contained"
                    style={{ float: "right" }}
                    onClick={handleClose}
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
  validate: validateHocSinh,
}); 

export default withStyles(styles)(withReduxForm(ModalHs));
