import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@app-models';
import { CoreApiService } from '../http/core-api.service';
import { LaravelBaseHttpResponse, LaravelHttpPaginationResponse } from 'src/app/shared/models/Http';
import { UserListStateParams } from '@app-models';

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
   * @returns Get users from server.
   */
  public getUsers(params: UserListStateParams): Observable<LaravelHttpPaginationResponse<User[]>> {
    return this.get<LaravelHttpPaginationResponse<User[]>>('users', params);
  }

  public updateUser(id: number, user: User): Observable<LaravelBaseHttpResponse<User>> {
    return this.put<LaravelBaseHttpResponse<User>>(`users/${id}`, user);
  }

  public deleteUser(id: number): Observable<LaravelBaseHttpResponse<User>> {
    return this.delete<LaravelBaseHttpResponse<User>>(`users/${id}`);
  }

  /**
   *
   * @param userName
   * @param userEmail
   * @returns
   */
  public createUser(user: User): Observable<LaravelBaseHttpResponse<User>> {
    return this.post<LaravelBaseHttpResponse<User>>(`users`, user);
  }

}
