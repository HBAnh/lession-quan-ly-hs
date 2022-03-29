import axiosService from "./axiosService";
import { API_ENDPOINT } from "../constants/index";

const BASE_URL = `${API_ENDPOINT}/api/v1/studentClass`;
const LIST_URL = {
  GET_BY_YEAR_CLASS: `${BASE_URL}/getByYearClass`,
  SAVE_STUDENT_CLASS: `${BASE_URL}/saveStudentClass`,
};
/**
 * Hàm lấy dữ liệu theo năm học và lớp
 * @param {number} schoolYearId : mã năm học
 * @param {number} classId  mã lớp học
 * @returns
 */
export const getStudentClassAPI = ({ schoolYearId, classId }) => {
  return axiosService.get(`${LIST_URL.GET_BY_YEAR_CLASS}/${schoolYearId}/${classId}`);
};

export const saveStudentClassAPI = (data) => {
  console.log(data.data);
  return axiosService.post(
    `${LIST_URL.SAVE_STUDENT_CLASS}`,
    data.data
  );
};
