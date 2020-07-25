import createFetchSaga from '../createFetchSaga';
import { fetchBudgetActions } from '../../actions/dashboardActions/budgetActions';
import { budgetApi } from '../../../api/getBudgetApi';

function* budgetSaga() {
  const fetchBudgetSaga = createFetchSaga(fetchBudgetActions, budgetApi);
  yield* fetchBudgetSaga();
}

export default budgetSaga;
