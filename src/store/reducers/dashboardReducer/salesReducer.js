import { handleActions } from 'redux-actions';
import { fetchSalesActions } from '../../actions/dashboardActions/salesActions';

const initialState = {
    apiResponse: []
};

const salesReducer = handleActions(
    {
        [fetchSalesActions.triggered]() {
            return { ...initialState };
        },

        [fetchSalesActions.succeeded](state, { payload }) {
            return {
                ...state,
                apiResponse: payload
            };
        },

        [fetchSalesActions.failed]() {
            return initialState;
        }
    },
    initialState
);

export { salesReducer };