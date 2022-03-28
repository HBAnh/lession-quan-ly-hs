import * as _typeActions from "../constants/studentClass";

const initialState = {
  listStudentclass : []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case _typeActions.GET_BY_YEAR_CLASS:
      return {
        ...state,
        listStudentclass: [],
      };

    case _typeActions.GET_BY_YEAR_CLASS_SUC:
        const { data } = action.payload;
      return {
        ...state,
        listStudentclass: data,
      };

    default:
      return state;
  }
};
export default reducer;
