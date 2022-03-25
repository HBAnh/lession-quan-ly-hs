import * as _namHocTypes from "../constants/namHoc";

export const fetchListNamHoc = () => {
  return {
    type: _namHocTypes.FETCH_NAM_HOC,
  };
};

export const fetchListNamHocSuccess = (data) => {
  return {
    type: _namHocTypes.FETCH_NAM_HOC_SUCCESS,
    payload: {
      data,
    },
  };
};

export const saveNamHoc = (data) => {
  return {
    type: _namHocTypes.SAVE_NAM_HOC,
    payload: data
  };
};

export const saveNamHocSuccess = (data, isAdd) => {
  return {
    type: _namHocTypes.SAVE_NAM_HOC_SUCCESS,
    payload: {
      data,
      isAdd,
    },
  };
};

export const setNamHocEditing = (dataEditing) => {
  return {
    type: _namHocTypes.SET_NAM_HOC_EDITING,
    payload: {
      dataEditing,
    },
  };
};

export const deleteNamHoc = (id) => {
  return {
    type: _namHocTypes.DELETE_NAM_HOC,
    payload: {
      id,
    },
  };
};

export const deleteNamHocSuccess = (id) => {
  return {
    type: _namHocTypes.DELETE_NAM_HOC_SUCCESS,
    payload: {
      id,
    },
  };
};
