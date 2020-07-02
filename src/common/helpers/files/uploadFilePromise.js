import api from "api";
import { resizeImage, generateFormData } from "common/helpers";

const uploadFilePromise = (params = {}) =>
  new Promise(async (resolve) => {
    let { file } = params.values;
    if (params.values.file.type.includes("image/")) {
      file = await resizeImage(params.values.file);
    }
    const promise = await api.resources.files
      .uploadFile({
        body: generateFormData({
          values: { reference: params.values.reference, file },
        }),
      })
      .toPromise();
    resolve(promise.response);
  });

export default uploadFilePromise;
