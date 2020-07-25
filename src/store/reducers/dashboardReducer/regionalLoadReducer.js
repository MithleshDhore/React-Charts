import { handleActions } from 'redux-actions';
import { fetchRegionalLoadActions } from '../../actions/dashboardActions/regionalLoadActions';

const initialState = {
    apiResponse: []
};

const regionalLoadReducer = handleActions(
    {
        [fetchRegionalLoadActions.triggered]() {
            return { ...initialState };
        },

        [fetchRegionalLoadActions.succeeded](state, { payload }) {
            return {
                ...state,
                apiResponse: payload
            };
        },

        [fetchRegionalLoadActions.failed]() {
            return initialState;
        }
    },
    initialState
);

export { regionalLoadReducer };