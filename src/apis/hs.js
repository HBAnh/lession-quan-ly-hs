import axiosService from "./axiosService";
import { API_ENDPOINT } from "../constants/index";

const BASE_URL = `${API_ENDPOINT}/api/v1/student`;
const LIST_URL = {
  GET_ALL: `${BASE_URL}/getAll`,
  SAVE: `${BASE_URL}/save`,
  DELETE: `${BASE_URL}/delete`,
}
export const getDanhSachHsAPI = () => {
  return axiosService.get(LIST_URL.GET_ALL);
};

export const SaveDanhSachHsAPI = (data) => {
  console.log(data);
  return axiosService.post(LIST_URL.SAVE, data);
};
export const deleteHsApi = (id) => {
  return axiosService.delete(`${LIST_URL.DELETE}/${id}`);
};
