import createFetchSaga from '../createFetchSaga';
import { fetchFlightExpenseActions } from '../../actions/dashboardActions/flightExpenseActions';
import { flightExpenseApi } from '../../../api/getFlightExpenseApi';

function* flightExpenseSaga() {
  const fetchFlightExpenseSaga = createFetchSaga(fetchFlightExpenseActions, flightExpenseApi);
  yield* fetchFlightExpenseSaga();
}

export default flightExpenseSaga;
