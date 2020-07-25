import createFetchSaga from '../createFetchSaga';
import { fetchPopulationActions } from '../../actions/dashboardActions/populationActions';
import { populationApi } from '../../../api/getPopulationApi';

function* populationSaga() {
  const fetchPopulationSaga = createFetchSaga(fetchPopulationActions, populationApi);
  yield* fetchPopulationSaga();
}

export default populationSaga;
