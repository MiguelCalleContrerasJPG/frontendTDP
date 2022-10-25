import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {  Observable } from "rxjs";
import { loginRespnse } from "./login.reponse";
import { map } from 'rxjs/operators'

@Injectable({
    providedIn:'root'
})
export class LoginService{
    nombreCorrecto= "Kevin";
    passCorrecta= "123";
    private isloggedIn: boolean;

    constructor(
        private http: HttpClient,
      ) {
        this.isloggedIn=false;
      }

      getAuthorizated(nombre : string, pass:string):Observable<any>  {
        //   console.log("Login Service");
        //   if (nombre == this.nombreCorrecto && pass == this.passCorrecta) {
        //       this.isloggedIn = true;
        //   }   
        console.log("loginService");
        
        return this.http.get<any>('http://localhost:4200/assets/user/users.json').pipe(map(resp=>{
            console.log("Json :", resp);
            
            if(nombre ==resp.id && pass ==resp.pass){
                this.isloggedIn = true;  
            }
        }));
      }

      isUserLoggedIn(): boolean {
        return this.isloggedIn;
    }
}