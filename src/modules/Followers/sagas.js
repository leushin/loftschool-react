import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions'
import { getFollowersInfo } from './api';
import { getApiKey } from '../Auth'

function* fetchFollowersWatcher() {
  yield takeLatest(fetchRequest, fetchFollowersFlow); // Замените вопросительный знак на подходящий экшен
}

export function* fetchFollowersFlow(action) {
  // Реализуйте загрузку данных
  // Используйте экшены FETCH_SUCCESS / FETCH_FAILURE
  const apiKey = yield select(getApiKey)
  try {
      const response = yield call(getFollowersInfo, apiKey, action.payload)
      yield put(fetchSuccess(response))
  } catch (error) {
    yield put(fetchFailure(error))
  }
}

export default function*() {
  yield fork(fetchFollowersWatcher);
}
