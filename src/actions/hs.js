import * as TypeActions from '../constants/hs';

export const fetchListHS = (data) => {
    return { 
        type: TypeActions.SHOW_DANH_SACH_HS,
        payload: {
            data
        }
    }
}
