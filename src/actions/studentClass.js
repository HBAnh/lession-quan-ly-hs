import * as _typeActions from "../constants/studentClass";

export const getByYearClass = (yearId, classId) => {
  return {
    type: _typeActions.GET_BY_YEAR_CLASS,
    payload: {
      yearId,
      classId,
    },
  };
};

export const getByYearClassSuc = (data) => {
  return {
    type: _typeActions.GET_BY_YEAR_CLASS_SUC,
    payload: { data },
  };
};
