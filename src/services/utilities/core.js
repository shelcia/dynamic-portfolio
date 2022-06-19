// core.js

import { apiProvider } from "./provider";

export class ApiCore {
  constructor(options) {
    if (options.getAll) {
      this.getAll = (signal, additionalParam, isAuthorized) => {
        return apiProvider.getAll(
          options.url,
          signal,
          additionalParam,
          isAuthorized
        );
      };
    }

    if (options.getSingle) {
      this.getSingle = (id, signal, additionalParam, isAuthorized) => {
        return apiProvider.getSingle(
          options.url,
          id,
          signal,
          additionalParam,
          isAuthorized
        );
      };
    }

    if (options.getByParams) {
      this.getByParams = (params, signal, additionalParam, isAuthorized) => {
        return apiProvider.getByParams(
          options.url,
          params,
          signal,
          additionalParam,
          isAuthorized
        );
      };
    }

    if (options.post) {
      this.post = (model, additionalParam, isAuthorized) => {
        return apiProvider.post(
          options.url,
          model,
          additionalParam,
          isAuthorized
        );
      };
    }

    if (options.postFormData) {
      this.postFormData = (model, additionalParam, isAuthorized) => {
        return apiProvider.postFormData(
          options.url,
          model,
          additionalParam,
          isAuthorized
        );
      };
    }

    if (options.put) {
      this.put = (model, signal, additionalParam, isAuthorized) => {
        return apiProvider.put(
          options.url,
          model,
          signal,
          additionalParam,
          isAuthorized
        );
      };
    }

    if (options.putById) {
      this.putById = (id, model, signal, additionalParam, isAuthorized) => {
        return apiProvider.putById(
          options.url,
          id,
          model,
          signal,
          additionalParam,
          isAuthorized
        );
      };
    }

    if (options.patch) {
      this.patch = (model, signal, additionalParam, isAuthorized) => {
        return apiProvider.patch(
          options.url,
          model,
          signal,
          additionalParam,
          isAuthorized
        );
      };
    }

    if (options.remove) {
      this.remove = (id, additionalParam, isAuthorized) => {
        return apiProvider.remove(
          options.url,
          id,
          additionalParam,
          isAuthorized
        );
      };
    }
  }
}
