import { Injectable } from '@angular/core';
// import { CanActivate } from '@angular/router';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGurdService implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // your code to check if the user is authenticated or not

    // return true; // or false or a UrlTree object depending on your logic
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
    console.log(this.auth.isLoggedIn());
    return this.auth.isLoggedIn();
  }
}
