import React from "react";
import ReactDOM from "react-dom";
import { Routers } from "./containers/App/Routers";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import configStore from "./store/configStore";
const store = configStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routers />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
