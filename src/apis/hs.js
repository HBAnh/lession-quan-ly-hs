import axiosService from "./axiosService";
import { API_ENDPOINT } from "../constants/index";
import qs from "query-string";

const url = "dsHs";

export const getDanhSachHsAPI = (params = {}) => {
  let queryParams = "";
  if (Object.keys(params).length > 0) {
    queryParams = `?${qs.stringify(params)}`;
  }
  //http://localhost:3000/dsHs?q=.. METHOD: GET
  return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
};

export const addDanhSachHsAPI = (data) => {
  //http://localhost:3000/dsHs  METHOD: POST
  return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};

export const updateDanhSachHsAPI = (data, idHs) => {
  //http://localhost:3000/dsHs/:idHs  METHOD: PUT
  return axiosService.put(`${API_ENDPOINT}/${url}/${idHs}`, data);
};

  //http://localhost:3000/dsHs/:idHs  METHOD: DELETE
export const deleteHsApi = (idHs) => {
  return axiosService.delete(`${API_ENDPOINT}/${url}/${idHs}`);
};
