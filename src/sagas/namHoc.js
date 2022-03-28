import { put, call, delay } from "redux-saga/effects";
import { showLoading, hideLoading } from "../actions/ui";
import { STATUS_CODE } from "../constants/index";
import {
  getListSchoolAPI,
  saveSchoolAPI,
  deleteSchoolAPI,
} from "../apis/namHoc";

import {
  deleteNamHocSuccess,
  fetchListNamHocSuccess,
  saveNamHocSuccess,
  // saveNamHocSuccess,
  // deleteNamHocSuccess,
} from "../actions/namHoc";
import { hideModal } from "../actions/modal";

export function* watchFetchLishNamHoc() {
  yield put(showLoading());
  const res = yield call(getListSchoolAPI);
  const { status: statusCode, data } = res;
  if (statusCode === STATUS_CODE.SUCCESS) {
    yield put(fetchListNamHocSuccess(data.data));
  }
  yield delay(1000);
  yield put(hideLoading());
}

export function* saveNamHocSaga({ payload }) {
  yield put(showLoading());
  const resp = yield call(saveSchoolAPI, payload);
  const { status: statusCode, data } = resp;
  if (statusCode === STATUS_CODE.SUCCESS) {
    const isAdd = payload.id === 0;
    yield put(saveNamHocSuccess(data.data, isAdd));
    
    if (!isAdd) {
      yield put(hideModal());
    }
  }
  yield delay(1000);
  yield put(hideLoading());
}

export function* deleteNamHocSaga({ payload }) {
  yield put(showLoading());
  const resp = yield call(deleteSchoolAPI, payload.id);
  const { status: statusCode } = resp;
  if (statusCode === STATUS_CODE.DELETE) {
    yield put(deleteNamHocSuccess(payload.id));
  }
  yield delay(1000);
  yield put(hideLoading());
}
