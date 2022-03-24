import { withStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const Menu = (classes) => {
  return (
    <div className={classes.menuVertical}>
      <List>
        <ListItem button >
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} >
            Trang Chủ
          </Link>
        </ListItem >
        <ListItem button >
          <Link to="/quan-ly-nam-hoc" style={{ textDecoration: 'none', color: 'inherit' }} >
            Năm Học
          </Link>
        </ListItem >
        <ListItem button >
          <Link to="/quan-ly-lop-hoc" style={{ textDecoration: 'none', color: 'inherit' }} >
            Lớp Học
          </Link>
        </ListItem >
        <ListItem button >
          <Link to="/quan-ly-hs" style={{ textDecoration: 'none', color: 'inherit' }} >
            Quan Lý Học Sinh
          </Link>
        </ListItem >
      </List>
    </div>
  );
};

export default withStyles(styles)(Menu);
