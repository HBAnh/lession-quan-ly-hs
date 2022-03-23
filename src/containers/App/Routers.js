import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import QuanLyHs from "../QuanLyHs/QuanLyHs";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="quanlyhs" element={<QuanLyHs />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
