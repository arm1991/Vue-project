export const filterDataByParams = (data, params) =>
  data.filter((obj) =>
    params.every(([key, value]) => value.split(",").includes(obj[key]))
  );
