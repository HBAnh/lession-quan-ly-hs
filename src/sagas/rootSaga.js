import {
  fork,
  take,
  takeEvery,
  put,
  call,
  delay,
} from "redux-saga/effects";
import * as TypeHsActions from "../constants/hs";
import { getDanhSachHsAPI } from "../apis/hs";
import { showLoading, hideLoading } from "../actions/ui";
import { STATUS_CODE } from "../constants/index";
import { fetchListHS } from "../actions/hs";

function* rootSaga() {
  yield fork(watchFetchDanhSachHS); 
}

function* watchFetchDanhSachHS() {
  while (true) {
    const action = yield take(TypeHsActions.START_FETCH_HS);
    yield put(showLoading());
    const { params } = action.payload;
    const resp = yield call(getDanhSachHsAPI, params);
    const { status: statusCode, data } = resp;
    if (statusCode === STATUS_CODE.SUCCESS) {
      yield put(fetchListHS(data));
    } else {
      console.log("loi fetch");
    }
    yield delay(1000);
    yield put(hideLoading());
  }
}

export default rootSaga;
