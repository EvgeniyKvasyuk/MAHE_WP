import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import { METHODS } from './constants';

export type ExtendedAxiosRequestConfig = AxiosRequestConfig & {
  onSuccess?: SuccessCallback;
  onError?: ErrorCallback;
};

export type ExtendedAxiosResponse<T = any> = Omit<AxiosResponse<T>, 'config'> & {
  config: ExtendedAxiosRequestConfig;
};

export type ExtendedAxiosError<T = any> = Omit<AxiosError<T>, 'config'> & {
  config: ExtendedAxiosRequestConfig;
};

export type RejectedCallback = (error: ExtendedAxiosError) => unknown;

export type RequestSuccessCallback = (
  value: ExtendedAxiosRequestConfig,
) => ExtendedAxiosRequestConfig | Promise<ExtendedAxiosRequestConfig>;

export type ResponseSuccessCallback = (
  value: ExtendedAxiosResponse,
) => ExtendedAxiosResponse | Promise<ExtendedAxiosResponse>;

export type RequestInterceptor = {
  onSuccess?: RequestSuccessCallback;
  onError?: RejectedCallback;
};

export type ResponseInterceptor = {
  onSuccess?: ResponseSuccessCallback;
  onError?: RejectedCallback;
};

export type SuccessCallback = <ResponseData>(response: ExtendedAxiosResponse<ResponseData>) => any;

export type ErrorCallback = (error: ExtendedAxiosError) => any;

export interface Config {
  config?: AxiosRequestConfig;
  requestInterceptors?: RequestInterceptor[];
  responseInterceptors?: ResponseInterceptor[];
}

export type Methods = keyof typeof METHODS;

type Request = <ResponseData>(req: ExtendedAxiosRequestConfig) => {
  response: Promise<ExtendedAxiosResponse<ResponseData> | void>;
  abort: () => void;
};

export interface IFetch {
  request: Request;
  get: Request;
  post: Request;
  put: Request;
  options: Request;
  delete: Request;
  patch: Request;

  registerRequestInterceptor: (interceptor: RequestInterceptor) => void;
  registerResponseInterceptor: (interceptor: ResponseInterceptor) => void;
}
