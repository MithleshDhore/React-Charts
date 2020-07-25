import createFetchSaga from '../createFetchSaga';
import { fetchSalesActions } from '../../actions/dashboardActions/salesActions';
import { salesApi } from '../../../api/getSalesApi';

function* salesSaga() {
  const fetchsalesSaga = createFetchSaga(fetchSalesActions, salesApi);
  yield* fetchsalesSaga();
}

export default salesSaga;
