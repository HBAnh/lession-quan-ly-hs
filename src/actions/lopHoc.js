import * as _lopHocTypes from "../constants/lopHoc";

export const getListLopHoc = () => {
  return {
    type: _lopHocTypes.GET_LOP_HOC,
  };
};

export const getListLopHocSuccess = (data) => {
  return {
    type: _lopHocTypes.GET_LOP_HOC_SUCCESS,
    payload: {
      data,
    },
  };
};

export const saveLopHoc = (data) => {
  return {
    type: _lopHocTypes.SAVE_LOP_HOC,
    payload: data
  };
};

export const saveLopHocSuccess = (data, isAdd) => {
  return {
    type: _lopHocTypes.SAVE_LOP_HOC_SUCCESS,
    payload: {
      data,
      isAdd,
    },
  };
};

export const setLopHocEditing = (dataEditing) => {
  return {
    type: _lopHocTypes.SET_LOP_HOC_EDITING,
    payload: {
      dataEditing,
    },
  };
};

export const deleteLopHoc = (id) => {
  return {
    type: _lopHocTypes.DELETE_LOP_HOC,
    payload: {
      id,
    },
  };
};

export const deleteLopHocSuccess = (id) => {
  return {
    type: _lopHocTypes.DELETE_LOP_HOC_SUCCESS,
    payload: {
      id,
    },
  };
};
