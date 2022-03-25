import * as _namHocTypes from "../constants/namHoc";
import SchoolYear from "../models/schoolYear.model";
const initialState = {
  listNamHoc: [],
  namHocEditing: new SchoolYear(),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case _namHocTypes.FETCH_NAM_HOC: {
      return {
        ...state,
        listNamHoc: [],
      };
    }
    case _namHocTypes.FETCH_NAM_HOC_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listNamHoc: data,
      };
    }
    case _namHocTypes.SET_NAM_HOC_EDITING: {
      const { dataEditing } = action.payload;
      return {
        ...state,
        namHocEditing: new SchoolYear(dataEditing),
      };
    }
    case _namHocTypes.SAVE_NAM_HOC: {
      return {
        ...state,
        namHocEditing: new SchoolYear(),
      };
    }
    case _namHocTypes.SAVE_NAM_HOC_SUCCESS: {
      const { data, isAdd } = action.payload;
      let { listNamHoc } = state;
      if (isAdd) {
        listNamHoc = [...listNamHoc, data];
      } else {
        listNamHoc = listNamHoc.map((o) => {
          if (o.id === data.id) {
            o = { ...data };
          }
          return o;
        });
      }
      return {
        ...state,
        listNamHoc,
      };
    }
    case _namHocTypes.DELETE_NAM_HOC: {
      return {
        ...state,
      }
    }
    case _namHocTypes.DELETE_NAM_HOC_SUCCESS: {
      return {
        ...state,
        listNamHoc: state.listNamHoc.filter(o=> o.id !== action.payload.id)
      }
    }
    default:
      return state;
  }
};

export default reducer;
