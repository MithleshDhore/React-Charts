import DashboardPage from './DashboardPage';
import { connect } from 'react-redux';
import { regionalLoadSelector, averageCostSelector, budgetSelector, salesSelector, bookingSelector, delayedFlightSelector, flightExpenseSelector, populationSelector, tripSelector } from '../../../store/selectors/dashboardSelector';
import { fetchAverageCostActions } from '../../../store/actions/dashboardActions/averageCostActions';
import { fetchBookingActions } from '../../../store/actions/dashboardActions/bookingActions';
import { fetchBudgetActions } from '../../../store/actions/dashboardActions/budgetActions';
import { fetchDelayedFlightActions } from '../../../store/actions/dashboardActions/delayedFlightActions';
import { fetchRegionalLoadActions } from '../../../store/actions/dashboardActions/regionalLoadActions';
import { fetchSalesActions } from '../../../store/actions/dashboardActions/salesActions';
import { fetchTripActions } from '../../../store/actions/dashboardActions/tripActions';
import { fetchPopulationActions } from '../../../store/actions/dashboardActions/populationActions';
import { fetchFlightExpenseActions } from '../../../store/actions/dashboardActions/flightExpenseActions';

const mapStateToProps = state => ({
  averageCost: averageCostSelector(state),
  booking: bookingSelector(state),
  budget: budgetSelector(state),
  delayedFlight: delayedFlightSelector(state),
  flightExpense: flightExpenseSelector(state),
  population: populationSelector(state),
  regionalLoad: regionalLoadSelector(state),
  sales: salesSelector(state),
  trip: tripSelector(state)
});
const mapDispatchToProps = dispatch => ({
  fetchAverageCost: payload => dispatch(fetchAverageCostActions.request(payload)),
  fetchBooking: payload => dispatch(fetchBookingActions.request(payload)),
  fetchBudget: payload => dispatch(fetchBudgetActions.request(payload)),
  fetchDelayedFlight: payload => dispatch(fetchDelayedFlightActions.request(payload)),
  fetchFlightExpense: payload => dispatch(fetchFlightExpenseActions.request(payload)),
  fetchPopulation: payload => dispatch(fetchPopulationActions.request(payload)),
  fetchRegionalLoad: payload => dispatch(fetchRegionalLoadActions.request(payload)),
  fetchsales: payload => dispatch(fetchSalesActions.request(payload)),
  fetchtrip: payload => dispatch(fetchTripActions.request(payload)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPage);
