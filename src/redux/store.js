import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { takeLeading, put } from 'redux-saga/effects';
import logger from 'redux-logger';
import axios from 'axios';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield takeLeading('FETCH_FAVORITES', fetchFavorites);
  yield takeLeading('FETCH_CATEGORIES', fetchCategories);
  yield takeLeading('FETCH_GIFS', fetchGifsSaga);
  yield takeLeading('ADD_FAVORITE', addFavoriteSaga);
  yield takeLeading('DELETE_FAVORITE', deleteFavoriteSaga);
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

function* fetchGifsSaga(action) {
  try {
    const response = yield axios.get(`api/search/${action.payload}`);
    yield put({ type: 'SET_GIFS', payload: response.data });
  } catch (error) {
    console.error(error);
  }
}

function* addFavoriteSaga(action) {
  try {
    yield axios.post('api/favorites', {
      gif_name: action.payload,
      gif_url: action.payload,
    });
    yield put({ type: 'FETCH_FAVORITES' });
  } catch (error) {
    alert(`Error adding Favorite`);
    console.error(error);
  }
}

function* deleteFavoriteSaga(action) {
  try {
    yield axios.delete(`/api/favorites/${action.payload}`);
    yield put({ type: 'FETCH_FAVORITES' });
  } catch (error) {
    alert(`Error deleting Favorite`);
    console.error(error);
  }
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
};

const trending = (state = [], action) => {
  switch (action.type) {
    case 'SET_TRENDING':
      return action.payload;
    default:
      return state;
  }
};

// Did not add FETCH_FAVORITES since I did not know what Amber had completed.
const favorites = (state = [], action) => {
  if (action.payload === 'ADD_FAVORITE') {
    return [...state, action.payload];
  }
  if (action.payload === 'DELETE_FAVORITE') {
    return state.filter((favorite) => favorite.id != action.payload.id);
  }
  if (action.type === 'SET_FAVORITES') {
    return action.payload;
  }
  return state;
}

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
    categories,
  }),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

export default store;
