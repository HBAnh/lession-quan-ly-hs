import * as _hsActions from "../constants/hs";

const initialState = {
  dsHs: [],
  hsEditing: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //hien thi ds
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
    //them ds
    case _hsActions.ADD_NEW_HS: {
      return {
        ...state,
      };
    }
    case _hsActions.ADD_NEW_HS_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        dsHs: [...state.dsHs, data],
      };
    }
    //set hs editing
    case _hsActions.SET_HS_EDITING: {
      const { hsEditing } = action.payload;
      return {
        ...state,
        hsEditing: hsEditing,
      };
    }
    //sua hs
    case _hsActions.UPDATE_HS: {
      return {
        ...state,
      };
    }
    case _hsActions.UPDATE_HS_SUCCESS: {
      const { data } = action.payload;
      const { dsHs } = state;
      const index = dsHs.findIndex((item) => item.id === data.id);
      if (index !== -1) {
        const newList = [
          ...dsHs.slice(0, index),
          data,
          ...dsHs.slice(index + 1),
        ];
        return {
          ...state,
          dsHs: newList,
        };
      }
      return {
        ...state,
      };
    }
    //xoa hs
    case _hsActions.DELETE_HS: {
      return {
        ...state,
      };
    }
    case _hsActions.DELETE_HS_SUCCESS: {
      const { data: idHs } = action.payload;
      return {
        ...state,
        dsHs: state.dsHs.filter((item) => item.id !== idHs),
      };
    }
    default:
      return state;
  }
};

export default reducer;
