import { handleActions } from 'redux-actions';
import { fetchBudgetActions } from '../../actions/dashboardActions/budgetActions';

const initialState = {
    apiResponse: []
};

const budgetReducer = handleActions(
    {
        [fetchBudgetActions.triggered]() {
            return { ...initialState };
        },

        [fetchBudgetActions.succeeded](state, { payload }) {
            return {
                ...state,
                apiResponse: payload
            };
        },

        [fetchBudgetActions.failed]() {
            return initialState;
        }
    },
    initialState
);

export { budgetReducer };