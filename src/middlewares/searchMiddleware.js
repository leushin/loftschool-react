import {search} from '../api';
import { fetchSearchRequest, getSearchSuccess, getSearchFailure } from '../actions';

const searchMiddleware = store => next => action => {
    if (action.type === fetchSearchRequest.toString()) {
        search(action.payload)
            .then(result => {
                store.dispatch(getSearchSuccess(result));
            })
            .catch(error => {
                store.dispatch(getSearchFailure(error));
            })
    }
    return next(action);
}

export default searchMiddleware;
