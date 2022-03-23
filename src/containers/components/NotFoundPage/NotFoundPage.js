import React from "react";
import styles from "./styles";
import { withStyles } from "@mui/styles";

const NotFoundPage = (classes) => {
  return (
    <div className={classes.container}>
      <div className={classes.alert}>404 !! NOT FOUND PAGE</div>
      <div className={classes.contentAlert}>
        <strong> Không tìm thấy trang!</strong>
      </div>
    </div>
  );
};

export default withStyles(styles)(NotFoundPage);
