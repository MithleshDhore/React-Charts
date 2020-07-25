import { get } from '../util/request';

async function regionalLoadApi(apiOptions) {
  const url = `${process.env.PUBLIC_URL}/regionalLoadData.json`;
  return get(url)(apiOptions).then(({ body } = {}) => [...body]);
}

export { regionalLoadApi };
