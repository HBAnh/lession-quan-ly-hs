import { takeLatest, takeEvery } from "redux-saga/effects";
import * as _namHocActions from "../constants/namHoc";
import * as _lopHocActions from "../constants/lopHoc";
import * as _studentClassActions from "../constants/studentClass";
import {
  watchFetchLishNamHoc,
  saveNamHocSaga,
  deleteNamHocSaga,
} from "./namHoc";
import { watchGetListLopHoc, saveLopHocSaga, deleteLopHocSaga } from "./lopHoc";
import { getStudentByYearClass,saveStudentClassSaga,deleteStudentClassSaga } from "./studentClass";

function* _rootSaga() {
  //Hoc sinh lop hoc
  yield takeLatest(
    _studentClassActions.GET_STUDENT_CLASS,
    getStudentByYearClass
  );
  yield takeEvery(_studentClassActions.SAVE_STUDENT_CLASS, saveStudentClassSaga);
  yield takeLatest(_studentClassActions.DELETE_STUDENT_CLASS, deleteStudentClassSaga);

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
