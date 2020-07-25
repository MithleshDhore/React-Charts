import createFetchSaga from '../createFetchSaga';
import { fetchTripActions } from '../../actions/dashboardActions/tripActions';
import { tripApi } from '../../../api/getTripApi';

function* tripSaga() {
  const fetchTripSaga = createFetchSaga(fetchTripActions, tripApi);
  yield* fetchTripSaga();
}

export default tripSaga;
