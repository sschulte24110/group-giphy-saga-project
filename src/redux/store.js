import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { takeLeading, put } from 'redux-saga/effects';
import logger from 'redux-logger';
import axios from 'axios';

function* rootSaga() {
  yield takeLeading('FETCH_SEARCH', fetchSearch);
}

const sagaMiddleware = createSagaMiddleware();

function* fetchSearch(action) {
  try{
    const response = yield axios.get(`api/search/${action.payload}`);
    yield put({ type: 'SET_GIFS', payload: response.data})
  } catch (error) {
    console.error(error);
  }
}

const trending = (state = [], action) => {
  return state;
};

const favorites = (state = [], action) => {
  return state;
};

const search = (state = [], action) => {
  if (action.type === 'SET_GIFS') {
    return action.payload;
  }
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
