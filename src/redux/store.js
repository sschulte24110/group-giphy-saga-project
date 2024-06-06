import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { takeLeading, put } from 'redux-saga/effects';
import logger from 'redux-logger';
import axios from 'axios';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield takeLeading('FETCH_FAVORITES', fetchFavorites);
  yield takeLeading('FETCH_CATEGORIES', fetchCategories);
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

function* fetchCategories() {
  try {
    const response = yield axios.get('/api/categories');
    console.log('fetch categories data', response.data);
    yield put({ type: 'SET_CATEGORIES', payload: response.data });
  } catch (err) {
    alert('Error fetching categories');
    console.error(err);
  }
}

const categories = (state = [], action) => {
  if (action.type === 'SET_CATEGORIES') {
    return action.payload;
  }
  return state;
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
    search,
    categories
  }),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

export default store;
