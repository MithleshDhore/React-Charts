import { get } from '../util/request';

async function delayedFlightApi(apiOptions) {
  const url = `${process.env.PUBLIC_URL}/delayedFlightData.json`;
  return get(url)(apiOptions).then(({ body } = {}) => [...body]);
}

export { delayedFlightApi };
