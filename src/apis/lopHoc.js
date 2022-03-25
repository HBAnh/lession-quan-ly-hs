import axiosService from "./axiosService";
import { API_ENDPOINT } from "../constants";

const url = "api/v1/class";

export const getListClassAPI = () => {
  return axiosService.get(`${API_ENDPOINT}/${url}/getAll`);
};

export const saveClassAPI = (data) => {
  return axiosService.post(`${API_ENDPOINT}/${url}/save`, data);
};

export const deleteClassAPI = (id) => {
  return axiosService.delete(`${API_ENDPOINT}/${url}/delete/${id}`);
};
