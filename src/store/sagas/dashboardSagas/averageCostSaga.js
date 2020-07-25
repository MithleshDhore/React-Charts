import createFetchSaga from '../createFetchSaga';
import { fetchAverageCostActions } from '../../actions/dashboardActions/averageCostActions';
import { averageCostApi } from '../../../api/getAverageCostApi';

function* averageCostSaga() {
  const fetchAverageCostSaga = createFetchSaga(fetchAverageCostActions, averageCostApi);
  yield* fetchAverageCostSaga();
}

export default averageCostSaga;
