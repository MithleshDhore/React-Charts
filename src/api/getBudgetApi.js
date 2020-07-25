import { get } from '../util/request';

async function budgetApi(apiOptions) {
  const url = `${process.env.PUBLIC_URL}/budgetData.json`;
  return get(url)(apiOptions).then(({ body } = {}) => [...body]);
}

export { budgetApi };
