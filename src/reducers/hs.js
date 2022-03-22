import * as TypeActions from "../constants/hs";

const initialState = {
  dsHS: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TypeActions.SHOW_DANH_SACH_HS: {
      const { data } = action.payload;
      return {
        ...state,
        dsHS: data,
      };
    }
    default:
      return state;
  }
};

export default reducer;
