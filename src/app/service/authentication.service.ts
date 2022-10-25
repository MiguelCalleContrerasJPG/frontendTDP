import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { delay, Observable, of, tap } from 'rxjs';
import { User } from './response/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isLoggedIn: boolean;

  constructor(

    private http: HttpClient
    
    )  {
      
     }

  getUsers(): Observable<User> {
    return this.http.get<User>(environment.apiUsersUrl);
  }

  login(): Observable<boolean> {
		return of(true).pipe(
			delay(1000),
			tap(val => {
				this.isLoggedIn = true;

			})
		);
	}


}
