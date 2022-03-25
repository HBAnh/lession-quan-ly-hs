import React from "react";
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

export default App;
