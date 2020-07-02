const generateFormDataArray = ({ formData, name, array }) => {
  array.forEach((item) => {
    formData.append(`${name}[]`, item);
  });
};

const generateFormData = ({ values, keysToIgnore, keysToArray, keysToPop }) => {
  const formData = new FormData();

  Object.keys(values).forEach((key) => {
    if (keysToArray && keysToArray.find(arrayKey => arrayKey === key)) {
      generateFormDataArray({ formData, name: key, array: values[key] });
    } else if (keysToPop && keysToPop.find(popKey => popKey === key)) {
      formData.append(key, values[key][0]);
    } else if (!keysToIgnore || !keysToIgnore.find(ignoreKey => ignoreKey === key)) {
      formData.append(key, values[key]);
    }
  });

  return formData;
};

export default generateFormData;
