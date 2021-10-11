export interface LaravelHttpResponse<T> {
    data: T;
    links: Record<string, unknown>;
    meta: Record<string, unknown>;
  }
