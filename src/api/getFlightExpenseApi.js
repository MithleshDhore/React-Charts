import { get } from '../util/request';

async function flightExpenseApi(apiOptions) {
  const url = `${process.env.PUBLIC_URL}/flightExpenseData.json`;
  return get(url)(apiOptions).then(({ body } = {}) => [...body]);
}

export { flightExpenseApi };
