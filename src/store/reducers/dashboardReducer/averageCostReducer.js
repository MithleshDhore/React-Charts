import { handleActions } from 'redux-actions';
import { fetchAverageCostActions } from '../../actions/dashboardActions/averageCostActions';

const initialState = {
    apiResponse: []
};

const averageCostReducer = handleActions(
    {
        [fetchAverageCostActions.triggered]() {
            return { ...initialState };
        },

        [fetchAverageCostActions.succeeded](state, { payload }) {
            return {
                ...state,
                apiResponse: payload
            };
        },

        [fetchAverageCostActions.failed]() {
            return initialState;
        }
    },
    initialState
);

export { averageCostReducer };