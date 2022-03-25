import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import QuanLyHocSinh from "../QuanLyHocSinh/QuanLyHocSinh";
import QuanLyNamHoc from "../QuanLyNamHoc/QuanLyNamHoc";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import QuanLyLopHoc from "../QuanLyLopHoc/QuanLyLopHoc";
export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="quan-ly-nam-hoc" element={<QuanLyNamHoc />} />
          <Route path="quan-ly-lop-hoc" element={<QuanLyLopHoc />} />
          <Route path="quan-ly-hs" element={<QuanLyHocSinh />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
