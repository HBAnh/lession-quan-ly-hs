import axiosService from "./axiosService";
import { API_ENDPOINT } from "../constants/index";
import qs from "query-string";

const url = 'dsHs';

export const getDanhSachHsAPI = (params = {}) => {
    let queryParams = "";
    if(Object.keys(params).length > 0){
        queryParams = `?${qs.stringify(params)}`
    }
    return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
}