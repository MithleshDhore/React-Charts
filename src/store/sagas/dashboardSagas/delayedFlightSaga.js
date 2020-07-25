import createFetchSaga from '../createFetchSaga';
import { fetchDelayedFlightActions } from '../../actions/dashboardActions/delayedFlightActions';
import { delayedFlightApi } from '../../../api/getDelayedFlightApi';

function* delayedFlightSaga() {
  const fetchDelayedFlightSaga = createFetchSaga(fetchDelayedFlightActions, delayedFlightApi);
  yield* fetchDelayedFlightSaga();
}

export default delayedFlightSaga;
