import { takeLatest, takeEvery } from "redux-saga/effects";
import * as _hsActions from "../constants/hs";
import { saveStudentSaga, deleteHsSaga, watchFetchDanhSachHS } from "./hs";

function* _rootSaga() {
  yield takeEvery(_hsActions.SAVE_STUDENT, saveStudentSaga);
  yield takeLatest(_hsActions.DELETE_HS, deleteHsSaga);
  yield takeLatest(_hsActions.START_FETCH_HS, watchFetchDanhSachHS);
}

export default _rootSaga;
