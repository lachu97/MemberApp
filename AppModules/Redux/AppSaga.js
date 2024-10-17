import {axiosGet} from '../Networks/Networks';
import {call,all,takeLatest,put} from 'redux-saga/effects';
import {GET_API} from './ActionsTypes';
import {addData} from './Reducer';
function* getAPIDataSaga(action) {
    try {
        const page = action.payload.page
        const result = yield call(axiosGet,page);
        yield put(addData(result.results));
    } catch (e) {
        console.error(e.message);
    }
}
export default function* appSaga() {
    yield all([
        takeLatest(GET_API,getAPIDataSaga),
    ]);
}
