// Реализуйте саги
import { takeEvery, select, put, call } from 'redux-saga/effects';
import { fetchPhotosRequest, fetchPhotosSuccess, fetchPhotosFailure } from './actions';
import { getPhotos } from './api';
import { getApiKey } from '../Auth';

export default function* () {
    yield takeEvery(fetchPhotosRequest, fetchPhotosFlow);
}

export function* fetchPhotosFlow(action) {
    const key = yield select(getApiKey)

    const { name, sol } = action.payload;
    try {
        const { photos } = yield call(getPhotos, key, name, sol)
        yield put(fetchPhotosSuccess({
            name,
            sol,
            photos: photos.map(el => ({
                id: el.id,
                img_src: el.img_src,
                camera: el.camera
            }))
        }))
    } catch (error) {
        yield put(fetchPhotosFailure({
            name,
            sol,
            error
        }))
    }
}