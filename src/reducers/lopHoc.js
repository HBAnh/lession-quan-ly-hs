import * as _lopHocTypes from "../constants/lopHoc";
import ClassModel from "../models/Class.model";
const initialState = {
  listLopHoc: [],
  lopHocEditing: new ClassModel(),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case _lopHocTypes.GET_LOP_HOC: {
      return {
        ...state,
        listLopHoc: [],
      };
    }
    case _lopHocTypes.GET_LOP_HOC_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listLopHoc: data,
      };
    }
    case _lopHocTypes.SET_LOP_HOC_EDITING: {
      const { dataEditing } = action.payload;
      return {
        ...state,
        lopHocEditing: new ClassModel(dataEditing),
      };
    }
    case _lopHocTypes.SAVE_LOP_HOC: {
      return {
        ...state,
        lopHocEditing: new ClassModel(),
      };
    }
    case _lopHocTypes.SAVE_LOP_HOC_SUCCESS: {
      const { data, isAdd } = action.payload;
      let { listLopHoc } = state;
      if (isAdd) {
        listLopHoc = [...listLopHoc, data];
      } else {
        listLopHoc = listLopHoc.map((o) => {
          if (o.id === data.id) {
            o = { ...data };
          }
          return o;
        });
      }
      return {
        ...state,
        listLopHoc,
      };
    }
    case _lopHocTypes.DELETE_LOP_HOC: {
      return {
        ...state,
      }
    }
    case _lopHocTypes.DELETE_LOP_HOC_SUCCESS: {
      return {
        ...state,
        listLopHoc: state.listLopHoc.filter(o=> o.id !== action.payload.id)
      }
    }
    default:
      return state;
  }
};

export default reducer;
