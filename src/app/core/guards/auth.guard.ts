import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(route);
    console.log(state);
    // iz ovoga zakljuciti da li korisnik ide na auth i napraviiti poseban slucaj za taj scenario
    // ako nije, onda ova logika koja vec postoji ovde
    if (this.authService.isAuthenticated()) {
      return true;
    }
    return this.router.navigateByUrl('/auth');

  }

}
