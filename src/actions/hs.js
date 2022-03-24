import * as _hsActions from "../constants/hs";

export const startFetchHs = () => {
  return {
    type: _hsActions.START_FETCH_HS,
  };
};

export const fetchListHS = (data) => {
  return {
    type: _hsActions.SHOW_DANH_SACH_HS,
    payload: {
      data,
    },
  };
};

export const saveStudent = (data) => {
  return {
    type: _hsActions.SAVE_STUDENT,
    payload: data,
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


export const deleteDanhSachHs = (id) => {
  return {
    type: _hsActions.DELETE_HS,
    payload: {
      id,
    },
  };
};

export const deleteDanhSachHsSuccess = (id) => {
  return {
    type: _hsActions.DELETE_HS_SUCCESS,
    payload: {
      id,
    },
  };
};
