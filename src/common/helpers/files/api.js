import { RxjsWrapper } from 'rxjs-ajax-wrapper';
import { APIPath } from 'config';

const apiDefs = {
  uploadFile: {
    url: `${APIPath}/api/v1/images`,
    method: 'POST',
    autoContentType: true,
  },
};

const api = new RxjsWrapper(apiDefs);
export default api;
