import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { takeLeading, put } from 'redux-saga/effects';
import logger from 'redux-logger';
import axios from 'axios';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield takeLeading('FETCH_FAVORITES', fetchFavorites);
}

function* fetchFavorites() {
  try {
    const response = yield axios.get('/api/favorites');
    console.log('fetch favorites data', response.data);
    yield put({ type: 'SET_FAVORITES', payload: response.data });
  } catch (err) {
    alert('Error fetching favorites');
    console.error(err);
  }
}

const trending = (state = [], action) => {
  return state;
};

const favorites = (state = [], action) => {
  if (action.type === 'SET_FAVORITES') {
    return action.payload;
  }
  return state;
};

const search = (state = [], action) => {
  return state;
};

const store = createStore(
  combineReducers({
    trending,
    favorites,
    search
  }),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

export default store;
