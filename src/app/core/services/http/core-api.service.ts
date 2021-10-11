import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CoreApiService {

    public readonly WS_ADDRESS = environment.wsAddress;

    constructor(protected http: HttpClient) { }

    /**
     * Generic Get method, will return single element of type T.
     *
     * @param slug - Slug for requested resource.
     * @param params - params for requested resource.
     */
    protected get<T>(slug: string, params = {}): Observable<T> {
        return this.http.get<T>(this.WS_ADDRESS + slug, { params });
    }

    /**
     * Post method.
     */
    protected post<T>(slug: string, data: unknown = null, options = undefined): Observable<T> {
        return this.http.post<T>(this.WS_ADDRESS + slug, data);
    }

    /**
     * Generic Put method.
     *
     * @param slug - Slug for requested resource.
     * @param body - Body for requested resource
     */
    protected put<T>(slug: string, body: unknown = null, options = undefined): Observable<any> {
        return this.http.put<T>(this.WS_ADDRESS + slug, body, options);
    }

    /**
     * Generic Patch method.
     *
     * @param slug - Slug for requested resource.
     * @param body - Body for requested resource
     */
    protected patch<T>(slug: string, body: unknown = null): Observable<T> {
        return this.http.patch<T>(this.WS_ADDRESS + slug, body);
    }

    /**
     * Generic Delete method.
     *
     * @param slug - SLug for requested resource.
     */
    protected delete<T>(slug: string): Observable<any> {
        return this.http.delete(this.WS_ADDRESS + slug);
    }
}
