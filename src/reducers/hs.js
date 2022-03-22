import * as _hsActions from "../constants/hs";

const initialState = {
  dsHs: [],
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
    default:
      return state;
  }
};

export default reducer;
