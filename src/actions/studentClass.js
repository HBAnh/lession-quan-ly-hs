import * as _typeActions from "../constants/studentClass";

export const getByYearClass = (schoolYearId, classId) => {
  return {
    type: _typeActions.GET_STUDENT_CLASS,
    payload: {
      schoolYearId,
      classId,
    },
  };
};

export const getByYearClassSuc = (data) => {
  return {
    type: _typeActions.GET_STUDENT_CLASS_SUC,
    payload: { data },
  };
};

export const saveStudentClass = (data) => {
  return {
    type: _typeActions.SAVE_STUDENT_CLASS,
    payload: {
      data,
    },
  };
};


export const saveStudentClassSuccess = (data, isAdd) => {
  return {
    type: _typeActions.SAVE_STUDENT_CLASS_SUC,
    payload: {
      data,
      isAdd
    },
  };
};