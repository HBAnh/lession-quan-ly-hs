import React from "react";
import styles from "./styles";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { Box, Button, Grid, MenuItem, Modal } from "@mui/material";
import { Field, reduxForm } from "redux-form";
import DangerousIcon from "@mui/icons-material/Dangerous";
import renderTextField from "../../../components/FormHelper/TextField/index";
import renderSelectField from "../../../components/FormHelper/SelectField/index";
import * as _modalActions from "../../../../actions/modal";
import * as _lopHocActions from "../../../../actions/lopHoc";
import { useDispatch } from "react-redux";
import { validateLopHoc } from "../../../components/FormHelper/validate";

const ModalLopHoc = (props) => {
  const { open, classes, invalid, submitting, handleSubmit } = props;
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(_modalActions.hideModal());
  };
  const onHandleSubmit = (_data) => {
    dispatch(_lopHocActions.saveLopHoc(_data));
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
                  id="name"
                  name="name"
                  label="Tên Lớp Học"
                  className={classes.textField}
                  component={renderTextField}
                />
              </Grid>
              <Grid item md={12} className={classes.formSelect}>
                <Field
                  id="grade"
                  name="grade"
                  label="Khối lớp"
                  className={classes.selectField}
                  component={renderSelectField}
                >
                  <MenuItem value={"Khác"}>Khác</MenuItem>
                  <MenuItem value={"Khối 10"}>Khối 10</MenuItem>
                  <MenuItem value={"Khối 11"}>Khối 11</MenuItem>
                  <MenuItem value={"Khối 12"}>Khối 12</MenuItem>
                </Field>
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

ModalLopHoc.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
};

const withReduxForm = reduxForm({
  form: "NamHoc_MANAGEMENT",
  validate: validateLopHoc,
});

export default withStyles(styles)(withReduxForm(ModalLopHoc));
