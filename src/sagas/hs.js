import { put, call, delay } from "redux-saga/effects";
import { getDanhSachHsAPI, SaveDanhSachHsAPI, deleteHsApi } from "../apis/hs";
import { showLoading, hideLoading } from "../actions/ui";
import { STATUS_CODE } from "../constants/index";
import {
  getStudentsSuccess,
  saveStudentSuccess,
  deleteStudentSuccess,
} from "../actions/hs";
import { hideModal } from "../actions/modal";
export function* getListStudentsSaga() {
  try {
    yield put(showLoading());
    const resp = yield call(getDanhSachHsAPI);
    const { status: statusCode, data } = resp;
    if (statusCode === STATUS_CODE.SUCCESS) {
      yield put(getStudentsSuccess(data.data));
    }
    yield delay(1000);
    yield put(hideLoading());
  } catch (error) {
    console.log(error);
  }
}

export function* saveStudentSaga({ payload }) {
  try {
    yield put(showLoading());
    const resp = yield call(SaveDanhSachHsAPI, 
     payload
    );
    const { status: statusCode, data } = resp;
    if (statusCode === STATUS_CODE.SUCCESS) {
      const isAdd = payload.id === 0;
      yield put(saveStudentSuccess(data.data, isAdd));
      if (!isAdd) {
        yield put(hideModal());
      }
    }
    delay(1000);
    yield put(hideLoading());
  } catch (error) {
    console.log(error);
  }
}

export function* deleteHsSaga({ payload }) {
  try {
    yield put(showLoading());
    const res = yield call(deleteHsApi, payload.id);
    const { status: statusCode } = res;
    if (statusCode === STATUS_CODE.DELETE) {
      yield put(deleteStudentSuccess(payload.id));
    }
    yield delay(1000);
    yield put(hideLoading());
  } catch (error) {
    console.log(error);
  }
}
