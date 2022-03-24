import * as _hsActions from "../constants/hs";
import StudentModel from "../models/student.model";

const initialState = {
  dsHs: [],
  hsEditing: new StudentModel(),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case _hsActions.START_FETCH_HS: {
      return {
        ...state,
        dsHs: [],
      };
    }
    case _hsActions.SHOW_DANH_SACH_HS: {
      const { data } = action.payload;
      return {
        ...state,
        dsHs: data,
      };
    }
    //save ds
    case _hsActions.SAVE_STUDENT: {
      return {
        ...state,
        hsEditing: new StudentModel(),
      };
    }
    case _hsActions.SAVE_STUDENT_SUCCESS: {
      const { data, isAdd } = action.payload;
      let { dsHs } = state;
      if (isAdd) {
        dsHs = [...dsHs, data];
      } else {
        dsHs = dsHs.map((o) => {
          if (o.id === data.id) {
            o = { ...data };
          }
          return o;
        });
      }
      return {
        ...state,
        dsHs,
      };
    }

    //set hs editing
    case _hsActions.SET_HS_EDITING: {
      const { hsEditing } = action.payload;
      return {
        ...state,
        hsEditing: new StudentModel(hsEditing),
      };
    }
    //xoa hs
    case _hsActions.DELETE_HS: {
      return {
        ...state,
      };
    }
    case _hsActions.DELETE_HS_SUCCESS: {
        return {
        ...state,
        dsHs: state.dsHs.filter(ds => ds.id !== action.payload.id)
      };
    }
    default:
      return state;
  }
};

export default reducer;
