import { get } from '../util/request';

async function populationApi(apiOptions) {
  const url = `${process.env.PUBLIC_URL}/populationData.json`;
  return get(url)(apiOptions).then(({ body } = {}) => body);
}

export { populationApi };
