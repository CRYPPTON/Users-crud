import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public static AUTHKEY = 'authKey';
  user = {} as User;
  isAuth = new BehaviorSubject<boolean>(false);

  public get loggedIn(): boolean {
    const data = localStorage.getItem(AuthService.AUTHKEY);
    return data ? true : false;
  }

  public set loggedIn(value: boolean) {
    if (value) {
      localStorage.setItem(AuthService.AUTHKEY, 'QPO-No-Delay');
    } else {
      localStorage.removeItem(AuthService.AUTHKEY);
    }
  }

  constructor() {
    this.isAuth.next(this.loggedIn);
  }

  public login(email: string, password: string): Observable<User | null> {

    this.user.id = 1;
    this.user.email = 'name@name.com';
    this.user.name = 'user';
    this.user.created = '10.10.2021';

    if (email === this.user.email && password === '123') {
      this.isAuth.next(true);
      this.loggedIn = true;

      return of(this.user);
    } else {
      return of(null);
    }
  }

  public logout() {
    this.loggedIn = false;
    this.isAuth.next(false);
  }

}
