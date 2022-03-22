import * as _hsActions from '../constants/hs';

export const startFetchHs = (params = {}) => {
    return {
        type: _hsActions.START_FETCH_HS,
        payload : {
            params,
        }
    }
}

export const fetchListHS = (data) => {
    return { 
        type: _hsActions.SHOW_DANH_SACH_HS,
        payload: {
            data
        }
    }
}
