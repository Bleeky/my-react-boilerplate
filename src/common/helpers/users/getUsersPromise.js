import { getUsersRequest } from 'modules/Users/actions';

const getUsersPromise = (params = {}) =>
  new Promise(async (resolve) => {
    const promise = await getUsersRequest(params).toPromise();
    resolve({
      options: promise.response.results,
    });
  });

export default getUsersPromise;
