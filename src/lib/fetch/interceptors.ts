import { FetchOptions } from "./types";

type RequestInterceptor = (
  url: string,
  options: FetchOptions
) =>
  | Promise<{ url: string; options: FetchOptions }>
  | { url: string; options: FetchOptions };

type ResponseInterceptor = (response: Response) => Promise<Response> | Response;

class InterceptorManager {
  private readonly requestInterceptors: RequestInterceptor[] = [];
  private readonly responseInterceptors: ResponseInterceptor[] = [];

  addRequestInterceptor(interceptor: RequestInterceptor) {
    this.requestInterceptors.push(interceptor);
  }

  addResponseInterceptor(interceptor: ResponseInterceptor) {
    this.responseInterceptors.push(interceptor);
  }

  async applyRequestInterceptors(url: string, options: FetchOptions) {
    let modifiedUrl = url;
    let modifiedOptions = options;

    for (const interceptor of this.requestInterceptors) {
      const result = await interceptor(modifiedUrl, modifiedOptions);
      modifiedUrl = result.url;
      modifiedOptions = result.options;
    }

    return { url: modifiedUrl, options: modifiedOptions };
  }

  async applyResponseInterceptors(response: Response) {
    let modifiedResponse = response;

    for (const interceptor of this.responseInterceptors) {
      modifiedResponse = await interceptor(modifiedResponse);
    }

    return modifiedResponse;
  }
}

export const interceptors = new InterceptorManager();
