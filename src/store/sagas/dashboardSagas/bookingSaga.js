import createFetchSaga from '../createFetchSaga';
import { fetchBookingActions } from '../../actions/dashboardActions/bookingActions';
import { bookingApi } from '../../../api/getBookingApi';

function* bookingSaga() {
  const fetchBookingSaga = createFetchSaga(fetchBookingActions, bookingApi);
  yield* fetchBookingSaga();
}

export default bookingSaga;
