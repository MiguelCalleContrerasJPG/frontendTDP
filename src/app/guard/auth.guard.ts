import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from '../components/login/login.component';
import { AuthenticationService } from '../service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    
    private router: Router, 
    private authService: AuthenticationService,
    ) {}

  canActivate(

    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLogin();
  }

  checkLogin() : boolean{

    if (this.authService.isLoggedIn) { 
      return true; 
    }
		// Store the attempted URL for redirecting
		// this.authService.redirectUrl = url;

		// Navigate to the login page with extras
		this.router.navigate(['/login']);
    return false;
  }
  
}
