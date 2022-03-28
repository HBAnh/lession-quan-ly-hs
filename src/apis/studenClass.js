import axiosService from "./axiosService";
import { API_ENDPOINT } from "../constants/index";

const BASE_URL = `${API_ENDPOINT}/api/v1/studentClass`;
const LIST_URL = {
  GET_BY_YEAR_CLASS: `${BASE_URL}/getByYearClass`,
}
/**
 * Hàm lấy dữ liệu theo năm học và lớp
 * @param {number} yearId : mã năm học
 * @param {number} classId  mã lớp học
 * @returns 
 */
export const getByYearClass = ({yearId, classId}) => {
    return axiosService.get(`${LIST_URL.GET_BY_YEAR_CLASS}/${yearId}/${classId}`);
  };
  

