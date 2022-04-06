import axios, { AxiosInstance } from 'axios';

import { METHODS } from './constants';
import {
  Config,
  IFetch,
  RejectedCallback,
  ExtendedAxiosRequestConfig,
  RequestInterceptor,
  RequestSuccessCallback,
  ResponseInterceptor,
  ResponseSuccessCallback,
} from './types';

export class Fetch implements IFetch {
  private axios: AxiosInstance;

  constructor({ config, requestInterceptors = [], responseInterceptors = [] }: Config = {}) {
    this.axios = axios.create(config);

    requestInterceptors?.forEach((interceptor) => {
      this.registerRequestInterceptor(interceptor);
    });

    responseInterceptors?.forEach((interceptor) => {
      this.registerResponseInterceptor(interceptor);
    });
  }

  registerRequestInterceptor({ onSuccess, onError }: RequestInterceptor) {
    this.axios.interceptors.request.use(onSuccess as RequestSuccessCallback, onError as RejectedCallback);
  }

  registerResponseInterceptor({ onSuccess, onError }: ResponseInterceptor) {
    this.axios.interceptors.response.use(onSuccess as ResponseSuccessCallback, onError as RejectedCallback);
  }

  request({ onSuccess, onError, ...request }: ExtendedAxiosRequestConfig) {
    const controller = new AbortController();

    const responsePromise = this.axios
      .request({ ...request, signal: controller.signal } as ExtendedAxiosRequestConfig)
      .then((data) => {
        // a simple way to process a request through callbacks + the ability to process Promise and at the call site remains
        return Promise.resolve(onSuccess ? onSuccess(data) : data);
      })
      .catch((error) => {
        return Promise.reject(onError ? onError(error) : error);
      });

    return {
      response: responsePromise,
      abort: () => {
        controller.abort();
      },
    };
  }

  get(request: Omit<ExtendedAxiosRequestConfig, 'method'>) {
    return this.request({ ...request, method: METHODS.GET });
  }

  post(request: Omit<ExtendedAxiosRequestConfig, 'method'>) {
    return this.request({ ...request, method: METHODS.POST });
  }

  put(request: Omit<ExtendedAxiosRequestConfig, 'method'>) {
    return this.request({ ...request, method: METHODS.PUT });
  }

  delete(request: Omit<ExtendedAxiosRequestConfig, 'method'>) {
    return this.request({ ...request, method: METHODS.DELETE });
  }

  options(request: Omit<ExtendedAxiosRequestConfig, 'method'>) {
    return this.request({ ...request, method: METHODS.OPTIONS });
  }

  patch(request: Omit<ExtendedAxiosRequestConfig, 'method'>) {
    return this.request({ ...request, method: METHODS.PATCH });
  }
}
