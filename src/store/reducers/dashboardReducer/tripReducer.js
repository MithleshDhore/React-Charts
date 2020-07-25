import { handleActions } from 'redux-actions';
import { fetchTripActions } from '../../actions/dashboardActions/tripActions';

const initialState = {
    apiResponse: []
};

const tripReducer = handleActions(
    {
        [fetchTripActions.triggered]() {
            return { ...initialState };
        },

        [fetchTripActions.succeeded](state, { payload }) {
            return {
                ...state,
                apiResponse: payload
            };
        },

        [fetchTripActions.failed]() {
            return initialState;
        }
    },
    initialState
);

export { tripReducer };