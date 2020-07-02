const generateJsonString = ({ values, keysToIgnore }) => {
  let object;
  Object.keys(values).forEach((key) => {
    if (!keysToIgnore || !keysToIgnore.find(ignoreKey => ignoreKey === key)) {
      object = { ...object, [key]: values[key] };
    }
  });
  return JSON.stringify(object);
};

export default generateJsonString;
