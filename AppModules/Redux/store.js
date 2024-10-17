import {configureStore} from '@reduxjs/toolkit';
import homeReducer from './Reducer';
import createSagaMiddleware from 'redux-saga';
import appSaga from './AppSaga';
import AppReactotron from '../DevConfig/ReactotronConfig';
const sagaMiddleware = createSagaMiddleware();
const rootReducer = {
    home: homeReducer,
};
let isDev = true
const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({thunk: false}).concat(sagaMiddleware),
    devTools:  isDev, // <- Comment while Taking Build
    enhancers: getDefaultEnhancers => getDefaultEnhancers().concat([AppReactotron.createEnhancer()])
});
sagaMiddleware.run(appSaga);
export default store;
