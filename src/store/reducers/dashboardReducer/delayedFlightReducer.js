import { handleActions } from 'redux-actions';
import { fetchDelayedFlightActions } from '../../actions/dashboardActions/delayedFlightActions';

const initialState = {
    apiResponse: []
};

const delayedFlightReducer = handleActions(
    {
        [fetchDelayedFlightActions.triggered]() {
            return { ...initialState };
        },

        [fetchDelayedFlightActions.succeeded](state, { payload }) {
            return {
                ...state,
                apiResponse: payload
            };
        },

        [fetchDelayedFlightActions.failed]() {
            return initialState;
        }
    },
    initialState
);

export { delayedFlightReducer };