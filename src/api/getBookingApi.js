import { get } from '../util/request';

async function bookingApi(apiOptions) {
  const url = `${process.env.PUBLIC_URL}/bookingData.json`;
  return get(url)(apiOptions).then(({ body } = {}) => [...body]);
}

export { bookingApi };
