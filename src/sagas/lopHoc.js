import { put, call, delay } from "redux-saga/effects";
import { showLoading, hideLoading } from "../actions/ui";
import { STATUS_CODE } from "../constants/index";
import { getListClassAPI, saveClassAPI, deleteClassAPI } from "../apis/lopHoc";

import {
  getListLopHocSuccess,
  saveLopHocSuccess,
  deleteLopHocSuccess,
} from "../actions/lopHoc";
import { hideModal } from "../actions/modal";

export function* watchGetListLopHoc() {
  yield put(showLoading());
  const resp = yield call(getListClassAPI);
  const { status: statusCode, data } = resp;
  if (statusCode === STATUS_CODE.SUCCESS) {
    yield put(getListLopHocSuccess(data.data));
  }
  yield delay(1000);
  yield put(hideLoading());
}

export function* saveLopHocSaga({payload}) {
  try {
    yield put(showLoading());
      const resp = yield call(saveClassAPI, payload);
      const {status: statusCode, data} = resp;
      if(statusCode === STATUS_CODE.SUCCESS){
          const isAdd = payload.id ===0;
          yield put(saveLopHocSuccess(data.data, isAdd));
          if(!isAdd) {
              yield put(hideModal());
          }
      }
    yield delay(1000);
    yield put(hideLoading());
  } catch (error) {
    console.log(error)
  }
}

export function* deleteLopHocSaga({ payload }) {
  yield put(showLoading());
  const resp = yield call(deleteClassAPI, payload.id);
  const { status: statusCode } = resp;
  if (statusCode === STATUS_CODE.SUCCESS) {
    yield put(deleteLopHocSuccess(payload.id));
  }
  yield delay(1000);
  yield put(hideLoading());
}
