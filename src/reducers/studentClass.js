import * as _typeActions from "../constants/studentClass";

const initialState = {
  listStudentclass : []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case _typeActions.GET_STUDENT_CLASS:
      return {
        ...state,
        listStudentclass: [],
      };

    case _typeActions.GET_STUDENT_CLASS_SUC:
        const { data } = action.payload;
      return {
        ...state,
        listStudentclass: data,
      };
    case _typeActions.SAVE_STUDENT_CLASS:
      return {
        ...state,
        listStudentclass: [],
      }
    case _typeActions.SAVE_STUDENT_CLASS_SUC:
      return {
        
      }

    default:
      return state;
  }
};
export default reducer;
