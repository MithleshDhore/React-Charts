const dashboardSelector = state => state.dashboard;
const averageCostSelector = state => state.dashboard.averageCost.apiResponse
const bookingSelector = state => state.dashboard.booking.apiResponse
const budgetSelector = state => state.dashboard.budget.apiResponse
const delayedFlightSelector = state => state.dashboard.delayedFlight.apiResponse
const flightExpenseSelector = state => state.dashboard.flightExpense.apiResponse
const populationSelector = state => state.dashboard.population.apiResponse
const regionalLoadSelector = state => state.dashboard.regionalLoad.apiResponse
const salesSelector = state => state.dashboard.sales.apiResponse
const tripSelector = state => state.dashboard.trip.apiResponse

export { 
    dashboardSelector, 
    averageCostSelector, 
    bookingSelector, 
    budgetSelector, 
    delayedFlightSelector, 
    flightExpenseSelector,
    populationSelector,
    regionalLoadSelector, 
    salesSelector,
    tripSelector
};