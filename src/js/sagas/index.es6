/**
 * Created by yvan on 16/7/10.
 */

import createSagaMiddleware from 'redux-saga';
import helloSaga from './../sagas/saga';

export const sagaMiddleware = createSagaMiddleware(helloSaga);