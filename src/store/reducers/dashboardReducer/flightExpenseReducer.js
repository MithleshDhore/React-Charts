import { handleActions } from 'redux-actions';
import { fetchFlightExpenseActions } from '../../actions/dashboardActions/flightExpenseActions';

const initialState = {
    apiResponse: []
};

const flightExpenseReducer = handleActions(
    {
        [fetchFlightExpenseActions.triggered]() {
            return { ...initialState };
        },

        [fetchFlightExpenseActions.succeeded](state, { payload }) {
            return {
                ...state,
                apiResponse: payload
            };
        },

        [fetchFlightExpenseActions.failed]() {
            return initialState;
        }
    },
    initialState
);

export { flightExpenseReducer };