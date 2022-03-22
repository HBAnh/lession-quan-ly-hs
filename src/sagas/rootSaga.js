import {
  fork,
  take,
  takeLatest,
  takeEvery,
  put,
  call,
  delay,
  select
} from "redux-saga/effects";
import * as _hsActions from "../constants/hs";
import {
  getDanhSachHsAPI,
  addDanhSachHsAPI,
  updateDanhSachHsAPI,
  deleteHsApi,
} from "../apis/hs";
import { showLoading, hideLoading } from "../actions/ui";
import { STATUS_CODE } from "../constants/index";
import {
  fetchListHS,
  addNewHsSuccess,
  updateDanhSachHsSuccess,
  deleteDanhSachHsSuccess,
} from "../actions/hs";
import { hideModal } from "../actions/modal";

function* rootSaga() {
  yield fork(watchFetchDanhSachHS);
  yield takeEvery(_hsActions.ADD_NEW_HS, addNewHsSaga);
  yield takeLatest(_hsActions.UPDATE_HS, updateDanhSachHsSaga);
  yield takeLatest(_hsActions.DELETE_HS, deleteHsSaga);
}

function* watchFetchDanhSachHS() {
  while (true) {
    const action = yield take(_hsActions.START_FETCH_HS);
    yield put(showLoading());
    const { params } = action.payload;
    const resp = yield call(getDanhSachHsAPI, params);
    const { status: statusCode, data } = resp;
    if (statusCode === STATUS_CODE.FETCH) {
      yield put(fetchListHS(data));
    }
    yield delay(1000);
    yield put(hideLoading());
  }
}

function* addNewHsSaga({ payload }) {
  try {
    const { hoten, tuoi, gioitinh, noisinh } = payload;
    yield put(showLoading());
    const resp = yield call(addDanhSachHsAPI, {
      hoten,
      tuoi,
      gioitinh,
      noisinh,
    });
    const { status: statusCode, data } = resp;
    if (statusCode === STATUS_CODE.CREATED) {
      yield put(addNewHsSuccess(data));
      yield put(hideModal());
    }
    delay(1000);
    yield put(hideLoading());
  } catch (error) {
    console.log(error);
  }
}

function* updateDanhSachHsSaga({ payload }) {
  try {
    const { hoten, tuoi, gioitinh, noisinh } = payload;
    const hsEditing = yield select((state) => state.hs.hsEditing);
    yield put(showLoading());
    const res = yield call(
      updateDanhSachHsAPI,
      { hoten, tuoi, gioitinh, noisinh },
      hsEditing.id
    );
    const { status: statusCode, data } = res;
    if (statusCode === STATUS_CODE.FETCH) {
      yield put(updateDanhSachHsSuccess(data));
      yield put(hideModal());
    }
    yield delay(1000);
    yield put(hideLoading());
  } catch (error) {
    console.log(error);
  }
}

function* deleteHsSaga({ payload }) {
  try {
    const { id } = payload;
    yield put(showLoading());
    const res = yield call(deleteHsApi, id);
    const { status: statusCode, data } = res;
    if (statusCode === STATUS_CODE.FETCH) {
      yield put(deleteDanhSachHsSuccess(data));
    }
    yield delay(1000);
    yield put(hideLoading());
  } catch (error) {
    console.log(error);
  }
}
export default rootSaga;
