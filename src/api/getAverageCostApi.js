import { get } from '../util/request';

async function averageCostApi(apiOptions) {
  const url = `${process.env.PUBLIC_URL}/averageCostData.json`;
  return get(url)(apiOptions).then(({ body } = {}) => [...body]);
}

export { averageCostApi };
