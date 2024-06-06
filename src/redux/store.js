import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { takeLeading, put } from 'redux-saga/effects';
import logger from 'redux-logger';
import axios from 'axios';

function* rootSaga() {}

const sagaMiddleware = createSagaMiddleware();

const trending = (state = [], action) => {
  return state;
};

const favorites = (state = [], action) => {
  return state;
};

const search = (state = [], action) => {
  return state;
};

const store = createStore(
  combineReducers({
    trending,
    favorites,
    search,
  }),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

export default store;
