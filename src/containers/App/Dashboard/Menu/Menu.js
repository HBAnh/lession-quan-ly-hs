import { withStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles";

const Menu = (classes) => {
  return (
    <div className={classes.menuVertical}>
      <ul className={classes.ul}>
        <li>
          <Link to="/" className={classes.a}>
            Trang Chu
          </Link>
        </li>
        <li>
          <Link to="/quanlyhs" className={classes.a}>
            QuanLyHs
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default withStyles(styles)(Menu);
