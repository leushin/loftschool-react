// Реализуйте редьюсер
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { addKey } from './actions';

// mV5RQbZzw2zjnq5h8JKek14z6X1EdvMQ2fDBIYai

const apiKey = handleActions({
    [addKey]: (_state, action) => action.payload,
}, null)

export default combineReducers({
    apiKey,
})

export const getIsAuthorized = state => Boolean(state.auth.apiKey);
export const getApiKey = state => state.auth.apiKey;