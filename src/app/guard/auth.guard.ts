import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from '../components/login/login.component';
<<<<<<< Updated upstream
=======
import { LoginService } from '../components/login/login.service';
>>>>>>> Stashed changes
import { AuthenticationService } from '../service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

<<<<<<< Updated upstream
  constructor(
    
    private router: Router, 
    private authService: AuthenticationService,
    ) {}
=======
  constructor(private router: Router, private authService: AuthenticationService, 
    private log : LoginService ) {}
>>>>>>> Stashed changes

  canActivate(

    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
<<<<<<< Updated upstream
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
=======
    return this.Authtenticate();
  }

  Authtenticate(){
   if(this.log.isUserLoggedIn()){
    return true;
   }
   else{
    console.log("No Authenticado")
>>>>>>> Stashed changes
    return false;
   }
  }
  
}
