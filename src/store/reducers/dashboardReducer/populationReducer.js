import { handleActions } from 'redux-actions';
import { fetchPopulationActions } from '../../actions/dashboardActions/populationActions';

const initialState = {
    apiResponse: {}
};

const populationReducer = handleActions(
    {
        [fetchPopulationActions.triggered]() {
            return { ...initialState };
        },

        [fetchPopulationActions.succeeded](state, { payload }) {
            return {
                ...state,
                apiResponse: payload
            };
        },

        [fetchPopulationActions.failed]() {
            return initialState;
        }
    },
    initialState
);

export { populationReducer };