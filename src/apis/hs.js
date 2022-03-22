import axiosService from "./axiosService";
import { API_ENDPOINT } from "../constants/index";


const url = 'dsHs';

export const getDanhSachHsAPI = () => {
    return axiosService.get(`${API_ENDPOINT}/${url}`);
}