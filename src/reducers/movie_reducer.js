import types from '../actions/types';

const DEFAULT_STATE = {

}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_MOVIE_QUOTE:
            return {...state, quote: action.quote}
        default:
            return state;
    }
}