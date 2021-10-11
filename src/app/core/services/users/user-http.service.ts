import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@app-models';
import { CoreApiService } from '@app-services';

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
}
