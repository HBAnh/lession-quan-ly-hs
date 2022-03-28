import { put, call, delay } from "redux-saga/effects";
import { showLoading, hideLoading } from "../actions/ui";
import { STATUS_CODE } from "../constants/index";
import { getByYearClass } from "../apis/studenClass";
import { getByYearClassSuc } from "../actions/studentClass";

export function* getStudentByYearClass({ payload }) {
  yield put(showLoading());
  const resp = yield call(getByYearClass, payload);
  const { data, status } = resp;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(getByYearClassSuc(data.data));
  }
  yield delay(1000);
  yield put(hideLoading());
}
