import { LaravelBaseHttpResponse } from './laravel-base-http-response.model';

export interface LaravelHttpPaginationResponse<T> extends LaravelBaseHttpResponse<T> {
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
