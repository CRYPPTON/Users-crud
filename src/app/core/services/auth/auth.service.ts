import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = {} as User;
  isAuth = new BehaviorSubject<boolean>(false);

  constructor() { }

  public login(email: string, password: string): Observable<User | null> {


    this.user.id = 1;
    this.user.email = 'name@name.com';
    this.user.name = 'user';
    this.user.created = '10.10.2021';

    if (email === this.user.email && password === '123') {
      this.isAuth.next(true);
      return of(this.user);
    } else {
      return of(null);
    }
  }

  isAuthenticated(): boolean {
    return this.isAuth.value;
  }

  public logout() {
    this.isAuth.next(false);
  }

}
