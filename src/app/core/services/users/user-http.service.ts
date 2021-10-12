import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@app-models';
import { CoreApiService } from '../http/core-api.service';
import { LaravelHttpResponse } from 'src/app/shared/models/Http';
import { ParamForReqSource } from '@app-models';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService extends CoreApiService {

  constructor(protected http: HttpClient) {
    super(http);
  }

  public getSingleUserById(id: number): Observable<User> {
    return this.get<User>(`users/${id}`);
  }

  /**
   * Get users from page.
   *
   * @param params
   *
   * @returns Users from page of index
   */
  public getUsers(params: ParamForReqSource): Observable<LaravelHttpResponse<User[]>> {
    return this.get<LaravelHttpResponse<User[]>>('users', params);
  }

}


