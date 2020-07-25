import createFetchSaga from '../createFetchSaga';
import { fetchRegionalLoadActions } from '../../actions/dashboardActions/regionalLoadActions';
import { regionalLoadApi } from '../../../api/getRegionalLoadApi';

function* regionalLoadSaga() {
  const fetchRegionalLoadSaga = createFetchSaga(fetchRegionalLoadActions, regionalLoadApi);
  yield* fetchRegionalLoadSaga();
}

export default regionalLoadSaga;
