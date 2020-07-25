import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import authSaga from './authSaga';
import averageCoseSaga from './dashboardSagas/averageCostSaga';
import bookingSaga from './dashboardSagas/bookingSaga';
import budgetSaga from './dashboardSagas/budgetSaga';
import delayedFlightSaga from './dashboardSagas/delayedFlightSaga';
import regionalLoadSaga from './dashboardSagas/regionalLoadSaga'
import salesSaga from './dashboardSagas/salesSaga';
import flightExpenseSaga from './dashboardSagas/flightExpenseSaga';
import populationSaga from './dashboardSagas/populationSaga';
import tripSaga from './dashboardSagas/tripSaga';

const sagaMiddleware = createSagaMiddleware();

const configureSaga = () => {
  function* rootSaga() {
    yield all([
      authSaga(),
      averageCoseSaga(),
      bookingSaga(),
      budgetSaga(),
      delayedFlightSaga(),
      flightExpenseSaga(),
      populationSaga(),
      regionalLoadSaga(),
      salesSaga(),
      tripSaga()
    ]);
  }

  sagaMiddleware.run(rootSaga);
};

export { sagaMiddleware, configureSaga };
