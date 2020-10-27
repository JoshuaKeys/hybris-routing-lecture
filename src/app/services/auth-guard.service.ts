import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    // The user wasn't authenticated
    let userSession = localStorage.getItem('user');
    if (userSession) {
      return true;
    }
    return this.router.createUrlTree(['/login'])
  }
  constructor(private router: Router) { }
}
