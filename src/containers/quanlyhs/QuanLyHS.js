import React from "react";
import { withStyles } from "@mui/styles";
import styles from "./styles";
import DanhSachHS from "../components/DanhSachHS/DanhSachHS";
import { useSelector } from "react-redux";

const QuanLyHS = (props) => {
  const {classes} = props;
  const dsHS = useSelector(state => state.hs.dsHS)
  return (
    <div>
      <div><h1 className={classes.title}>Quan Ly Hoc Sinh</h1></div>
      <div className={classes.tableContainer}>
        <DanhSachHS dsHS={dsHS}/>
      </div>
    </div>
  );
};

export default withStyles(styles)(QuanLyHS);
