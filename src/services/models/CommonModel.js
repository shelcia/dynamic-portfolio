import { ApiCore } from "../utilities/core";

const url = "common";

export const apiCommon = new ApiCore({
  getAll: true,
  getSingle: true,
  getByParams: true,
  post: true,
  put: true,
  putById: true,
  patch: true,
  delete: true,
  url: url,
  //   plural: plural,
  //   single: single,
});
