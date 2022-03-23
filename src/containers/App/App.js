import React from "react";
import { withStyles } from "@mui/styles";
import styles from "./styles";
import Dashboard from "./Dashboard/Dashboard";
import GlobalLoading from "../components/GlobalLoading/GlobalLoading";
const App = () => {
  return (
    <div>
      <GlobalLoading />
      <Dashboard />
    </div>
  );
};

export default withStyles(styles)(App);
