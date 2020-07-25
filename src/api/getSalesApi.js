import { get } from '../util/request';

async function salesApi(apiOptions) {
  const url = `${process.env.PUBLIC_URL}/salesData.json`;
  return get(url)(apiOptions).then(({ body } = {}) => [...body]);
}

export { salesApi };
