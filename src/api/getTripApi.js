import { get } from '../util/request';

async function tripApi(apiOptions) {
  const url = `${process.env.PUBLIC_URL}/tripData.json`;
  return get(url)(apiOptions).then(({ body } = {}) => [...body]);
}

export { tripApi };
