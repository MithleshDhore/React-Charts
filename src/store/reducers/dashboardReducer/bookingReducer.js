import { handleActions } from 'redux-actions';
import { fetchBookingActions } from '../../actions/dashboardActions/bookingActions';

const initialState = {
    apiResponse: []
};

const bookingReducer = handleActions(
    {
        [fetchBookingActions.triggered]() {
            return { ...initialState };
        },

        [fetchBookingActions.succeeded](state, { payload }) {
            return {
                ...state,
                apiResponse: payload
            };
        },

        [fetchBookingActions.failed]() {
            return initialState;
        }
    },
    initialState
);

export { bookingReducer };