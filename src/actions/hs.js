import * as _hsActions from "../constants/hs";

export const getStudents = () => {
  return {
    type: _hsActions.GET_STUDENT,
  };
};

export const getStudentsSuccess = (data) => {
  return {
    type: _hsActions.GET_STUDENT_SUCCESS,
    payload: {
      data,
    },
  };
};

export const saveStudent = (data) => {
  return {
    type: _hsActions.SAVE_STUDENT,
    payload: { data },
  };
};

export const saveStudentSuccess = (data, isAdd) => {
  return {
    type: _hsActions.SAVE_STUDENT_SUCCESS,
    payload: {
      data,
      isAdd,
    },
  };
};

export const setHsEditing = (hsEditing) => {
  return {
    type: _hsActions.SET_HS_EDITING,
    payload: {
      hsEditing,
    },
  };
};

export const deleteStudent = (id) => {
  return {
    type: _hsActions.DELETE_STUDENT,
    payload: {
      id,
    },
  };
};

export const deleteStudentSuccess = (id) => {
  return {
    type: _hsActions.DELETE_STUDENT_SUCCESS,
    payload: {
      id,
    },
  };
};
