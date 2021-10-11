import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@app-models';
import { CoreApiService } from '../http/core-api.service';
import { LaravelHttpResponse } from 'src/app/shared/models/Http';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService extends CoreApiService {

  constructor(protected http: HttpClient) {
    super(http);
  }

  /**
   * Get users from server.
   *
   *@returns Observable all User.
   */
  public getUsers(): Observable<LaravelHttpResponse<User[]>> {
    return this.get<LaravelHttpResponse<User[]>>('users');
  }

  public getSingleUserById(id: number): Observable<User> {
    return this.get<User>(`users/${id}`);
  }
}


