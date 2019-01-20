import { show } from '../api';
import { fetchShowsRequest, getShowsSuccess, getShowsFailure } from '../actions';

const showMiddleware = store => next => action => {
    if (action.type === fetchShowsRequest.toString()) {
        show(action.payload)
            .then(result => {
                store.dispatch(getShowsSuccess(result));
            })
            .catch(error => {
                store.dispatch(getShowsFailure(error));
            })
    }
    return next(action);
};

export default showMiddleware;
