import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@app-models';
import { CoreApiService } from '../http/core-api.service';
import { LaravelBaseHttpResponse, LaravelHttpPaginationResponse } from 'src/app/shared/models/Http';
import { ParamForReqSource } from '@app-models';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService extends CoreApiService {

  constructor(protected http: HttpClient) {
    super(http);
  }

  public getSingleUserById(id: number): Observable<LaravelBaseHttpResponse<User>> {
    return this.get<LaravelBaseHttpResponse<User>>(`users/${id}`);
  }

  /**
   * Get users from page.
   *
   * @param params
   *
   * @returns Users from page of index
   */
  public getUsers(params: ParamForReqSource): Observable<LaravelHttpPaginationResponse<User[]>> {
    return this.get<LaravelHttpPaginationResponse<User[]>>('users', params);
  }

}


