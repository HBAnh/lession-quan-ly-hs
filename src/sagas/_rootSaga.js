import { takeLatest, takeEvery } from "redux-saga/effects";
import * as _hsActions from "../constants/hs";
import * as _namHocActions from "../constants/namHoc";
import * as _lopHocActions from "../constants/lopHoc";
import * as _studentClassActions from "../constants/studentClass";
import { saveStudentSaga, deleteHsSaga, watchFetchDanhSachHS } from "./hs";
import {
  watchFetchLishNamHoc,
  saveNamHocSaga,
  deleteNamHocSaga,
} from "./namHoc";
import { watchGetListLopHoc, saveLopHocSaga, deleteLopHocSaga } from "./lopHoc";
import { getStudentByYearClass } from "./studentClass";

function* _rootSaga() {
  //Hoc sinh lop hoc
  yield takeLatest(
    _studentClassActions.GET_BY_YEAR_CLASS,
    getStudentByYearClass
  );

  //hoc sinh
  yield takeLatest(_hsActions.START_FETCH_HS, watchFetchDanhSachHS);
  yield takeEvery(_hsActions.SAVE_STUDENT, saveStudentSaga);
  yield takeLatest(_hsActions.DELETE_HS, deleteHsSaga);
  //nam hoc
  yield takeLatest(_namHocActions.FETCH_NAM_HOC, watchFetchLishNamHoc);
  yield takeEvery(_namHocActions.SAVE_NAM_HOC, saveNamHocSaga);
  yield takeLatest(_namHocActions.DELETE_NAM_HOC, deleteNamHocSaga);
  //lop hoc
  yield takeLatest(_lopHocActions.GET_LOP_HOC, watchGetListLopHoc);
  yield takeEvery(_lopHocActions.SAVE_LOP_HOC, saveLopHocSaga);
  yield takeLatest(_lopHocActions.DELETE_LOP_HOC, deleteLopHocSaga);
}

export default _rootSaga;
