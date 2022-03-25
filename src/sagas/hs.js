import { put, call, delay } from "redux-saga/effects";
import { getDanhSachHsAPI, SaveDanhSachHsAPI, deleteHsApi } from "../apis/hs";
import { showLoading, hideLoading } from "../actions/ui";
import { STATUS_CODE } from "../constants/index";
import {
  fetchListHS,
  saveStudentSuccess,
  deleteDanhSachHsSuccess,
} from "../actions/hs";
import { hideModal } from "../actions/modal";
export function* watchFetchDanhSachHS() {
  try {
    yield put(showLoading());
    const resp = yield call(getDanhSachHsAPI);
    const { status: statusCode, data } = resp;
    if (statusCode === STATUS_CODE.SUCCESS) {
      yield put(fetchListHS(data.data));
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
    const resp = yield call(SaveDanhSachHsAPI, {
      ...payload,
      birthday: new Date(),
    });
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
      yield put(deleteDanhSachHsSuccess(payload.id));
    }
    yield delay(1000);
    yield put(hideLoading());
  } catch (error) {
    console.log(error);
  }
}
