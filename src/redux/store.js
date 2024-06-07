import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { takeLeading, put } from 'redux-saga/effects';
import logger from 'redux-logger';
import axios from 'axios';

function* rootSaga() {
  yield takeLeading('FETCH_GIFS', fetchGifsSaga);
  yield takeLeading('ADD_FAVORITE', addFavoriteSaga);
  yield takeLeading('DELETE_FAVORITE', deleteFavoriteSaga);
}

const sagaMiddleware = createSagaMiddleware();

function* fetchGifsSaga(action) {
  try{
    const response = yield axios.get(`api/search/${action.payload}`);
    yield put({ type: 'SET_GIFS', payload: response.data})
  } catch (error) {
    console.error(error);
  }
}

// Need to check with Amber's work to see if this will be correct.
// Also need to see if payloads are correct
// We might need to add a category_id??
function* addFavoriteSaga(action) {
  try {
    yield axios.post('api/favorites', { gif_name: action.payload, gif_url: action.payload});
    yield put({ type: 'FETCH_FAVORITES' });
  } catch (error) {
    alert(`Error adding Favorite`);
    console.error(error);
  }
}

function* deleteFavoriteSaga(action) {
  try {
    yield axios.delete(`/api/favorites/${action.payload}`);
    yield put({ type: 'FETCH_FAVORITES'});
  } catch (error) {
    alert(`Error deleting Favorite`);
    console.error(error);
  }
}

const trending = (state = [], action) => {
  return state;
};

// Did not add FETCH_FAVORITES since I did not know what Amber had completed.
const favorites = (state = [], action) => {
  if (action.payload === 'ADD_FAVORITE') {
    return [...state, action.payload]
  } if (action.payload === 'DELETE_FAVORITE') {
    return state.filter((favorite) => favorite.id !=action.payload.id);
  }
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
