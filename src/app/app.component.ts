import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from './components/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-world';
  formulario:FormGroup;
respuesta:any;
  constructor(private log : LoginService){
    this.formulario = new FormGroup({
 
      nombre: new FormControl(''),
      pass:new FormControl('')
    })
  }
  
  Logueado(){
    return true;
  }
  LoginClick(){
    console.log("nombre: ", this.formulario.value.nombre);
    console.log("pass: ", this.formulario.value.pass);  
    this.respuesta = this.log.getAuthorizated(this.formulario.value.nombre, this.formulario.value.pass)
  console.log("Respuesta Serv: ",this.respuesta)
  }
}
