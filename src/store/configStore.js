import {applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from "redux-saga";
import rootReducer from '../reducers/rootReducer';
import rootSaga from '../sagas/rootSaga';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const configStore = () => {
    const middlewares = [sagaMiddleware];
    const enchancers = [applyMiddleware(...middlewares)]
    const store = createStore(rootReducer, composeEnhancer(...enchancers));
    sagaMiddleware.run(rootSaga);

    return store;
}

export default configStore;