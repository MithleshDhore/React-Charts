import { combineReducers } from 'redux';
import { averageCostReducer } from './averageCostReducer';
import { bookingReducer } from './bookingReducer';
import { budgetReducer } from './budgetReducer';
import { delayedFlightReducer } from './delayedFlightReducer';
import { flightExpenseReducer } from './flightExpenseReducer'
import { populationReducer } from './populationReducer'
import { regionalLoadReducer } from './regionalLoadReducer';
import { salesReducer } from './salesReducer';
import { tripReducer } from './tripReducer'

const dashboardReducer = combineReducers({
  averageCost: averageCostReducer,
  booking: bookingReducer,
  budget: budgetReducer,
  delayedFlight: delayedFlightReducer,
  flightExpense: flightExpenseReducer,
  population: populationReducer,
  regionalLoad: regionalLoadReducer,
  sales: salesReducer,
  trip: tripReducer
});

export default dashboardReducer;
