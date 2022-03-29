import * as _typeActions from "../constants/studentClass";
import StudentModel from "../models/student.model";
const initialState = {
  listStudentclass: [],
  studentEditing: new StudentModel(),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case _typeActions.GET_STUDENT_CLASS:
      {
        return {
          ...state,
          listStudentclass: [],
        };
      }

    case _typeActions.GET_STUDENT_CLASS_SUC:
      const { data } = action.payload;
      return {
        ...state,
        listStudentclass: data,
      };

    case _typeActions.SET_STUDENT_CLASS_EDITING: {
      const { studentEditing } = action.payload;
      return {
        ...state,
        studentEditing: new StudentModel(studentEditing),
      };
    }

    case _typeActions.SAVE_STUDENT_CLASS:
      return {
        ...state,
        studentEditing: new StudentModel(),
      };

    case _typeActions.SAVE_STUDENT_CLASS_SUC: {
      const { data, isAdd } = action.payload;
      let { listStudentclass } = state;
      if (isAdd) {
        listStudentclass = [data, ...listStudentclass];
        console.log('after:',listStudentclass);
      } else {
        listStudentclass = listStudentclass.map((o) => {
          if (o.id === data.id) {
            o = { ...data };
          }
          return o;
        });
        console.log(listStudentclass);
      }
      return {
        ...state,
        listStudentclass,
      };
    }

    case _typeActions.DELETE_STUDENT_CLASS: {
      return {
        ...state,
      };
    }
    case _typeActions.DELETE_STUDENT_CLASS_SUC: {
      return {
        ...state,
        listStudentclass: state.listStudentclass.filter(
          (o) => o.id !== action.payload.id
        ),
      };
    }
    default:
      return state;
  }
};
export default reducer;
