import axiosService from "./axiosService";
import { API_ENDPOINT } from "../constants/index";

const url = "api/v1/student";

export const getDanhSachHsAPI = () => {
  return axiosService.get(`${API_ENDPOINT}/${url}/${"getAll"}`);
};

export const SaveDanhSachHsAPI = (data) => {
  return axiosService.post(`${API_ENDPOINT}/${url}/${"save"}`, data);
};
export const deleteHsApi = (idHs) => {
  return axiosService.delete(`${API_ENDPOINT}/${url}/${"delete"}/${idHs}`);
};
