import * as _hsActions from "../constants/hs";

export const startFetchHs = (params = {}) => {
  return {
    type: _hsActions.START_FETCH_HS,
    payload: {
      params,
    },
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

export const addNewHs = (hoten, tuoi, gioitinh = true, noisinh) => {
  return {
    type: _hsActions.ADD_NEW_HS,
    payload: {
      hoten,
      tuoi,
      gioitinh,
      noisinh,
    },
  };
};

export const addNewHsSuccess = (data) => {
  return {
    type: _hsActions.ADD_NEW_HS_SUCCESS,
    payload: {
      data,
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

export const updateDanhSachHs = (hoten, tuoi, gioitinh, noisinh) => {
  return {
    type: _hsActions.UPDATE_HS,
    payload: {
      hoten,
      tuoi,
      gioitinh,
      noisinh,
    },
  };
};

export const updateDanhSachHsSuccess = (data) => {
  return {
    type: _hsActions.UPDATE_HS_SUCCESS,
    payload: {
      data,
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

export const deleteDanhSachHsSuccess = (data) => {
  return {
    type: _hsActions.DELETE_HS_SUCCESS,
    payload: {
      data,
    },
  };
};
