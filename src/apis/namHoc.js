import axiosService from "./axiosService";
import { API_ENDPOINT } from "../constants";

const url = "api/v1/schoolYear";

export const getListSchoolAPI = () => {
  return axiosService.get(`${API_ENDPOINT}/${url}/getAll`);
};

export const saveSchoolAPI = (data) => {
  return axiosService.post(`${API_ENDPOINT}/${url}/save`, data);
};

export const deleteSchoolAPI = (id) => {
  return axiosService.delete(`${API_ENDPOINT}/${url}/delete/${id}`);
};
