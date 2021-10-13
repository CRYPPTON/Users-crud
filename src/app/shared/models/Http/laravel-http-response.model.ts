export interface LaravelHttpResponse<T> {
  data: T;
  links: Record<string, unknown>;
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
}
