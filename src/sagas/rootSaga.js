import { Call } from '@mui/icons-material';
import {all,takeEvery} from 'redux-saga/effects';
import * as TypeHsActions from '../constants/hs';
import {getDanhSachHsAPI} from '../apis/hs';
function* rootSaga(){
    yield all(watchFetchDanhSachHS);
}

function* watchFetchDanhSachHS(){
    yield takeEvery(TypeHsActions.SHOW_DANH_SACH_HS, fetchDanhSachHs)
}
function* fetchDanhSachHs() {
    const resp = yield Call(getDanhSachHsAPI());
    console.log(resp);
}

export default rootSaga;