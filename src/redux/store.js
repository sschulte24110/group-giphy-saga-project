import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { takeLeading, put } from 'redux-saga/effects';
import logger from 'redux-logger';
import axios from 'axios';

function* rootSaga() {
  yield takeLeading('GET_TRENDING', getTrending);
}

function* getTrending(action) {
  try {
    const result = yield axios.get('/api/trending');
    console.log(result);
    yield put({ type: 'SET_TRENDING', payload: result.data });
  } catch (err) {
    console.error(err);
  }
}

const sagaMiddleware = createSagaMiddleware();

const trending = (state = [], action) => {
  switch (action.type) {
    case 'SET_TRENDING':
      return action.payload;
    default:
      return state;
  }
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
