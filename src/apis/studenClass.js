import axiosService from "./axiosService";
import { API_ENDPOINT } from "../constants/index";

const BASE_URL = `${API_ENDPOINT}/api/v1/studentClass`;
const LIST_URL = {
  GET_BY_YEAR_CLASS: `${BASE_URL}/getByYearClass`,
  SAVE_STUDENT_CLASS: `${BASE_URL}/saveStudentClass`,
  DELETE_STUDENT_CLASS: `${BASE_URL}/deleteStudentClass`,
};
/**
 * Hàm lấy dữ liệu theo năm học và lớp
 * @param {number} schoolYearId : mã năm học
 * @param {number} classId  mã lớp học
 * @returns
 */
export const getStudentClassAPI = ({ schoolYearId, classId }) => {
  return axiosService.get(
    `${LIST_URL.GET_BY_YEAR_CLASS}/${schoolYearId}/${classId}`
  );
};
/**
 * Hàm Lưu dữ liệu
 * @param {object} data 
 * @returns 
 */
export const saveStudentClassAPI = (data) => {
  return axiosService.post(`${LIST_URL.SAVE_STUDENT_CLASS}`, data);
};
/**
 * Hàm xoá dữ liệu 
 * @param {object} data 
 * @returns 
 */
export const deleteStudentClassAPI = (data) => {
  return axiosService.delete(
    `${LIST_URL.DELETE_STUDENT_CLASS}/${data.id}/${data.studentId}`
  );
};
