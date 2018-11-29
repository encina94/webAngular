import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Routes, RouterModule,ActivatedRoute } from '@angular/router';
import { NotificationOptions } from '../../core/notifications/notification';
import { FormGroup,Validators,FormBuilder } from '@angular/forms'
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

import { ServicesHttpService } from 'src/app/services/services-http.service';
import { error } from 'selenium-webdriver';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  listPerf: any[];
  identidad:string;
  clave:string;
  restItems: any;
  private notificador:NotificationOptions;
  datosLogin: FormGroup;
  flag:boolean;
  constructor(private http: HttpClient, 
    // private service:  LoginService
    private service:  ServicesHttpService, private router:Router, private fb: FormBuilder) {
    this.notificador=new NotificationOptions();
  }

  ngOnInit(){
    this.flag = true;
    this.datosLogin = this.fb.group({
      espUsuario: [this.identidad, Validators.required],
      espContra: [this.clave, Validators.required
       ]
  });
  }

  login(){
    if(this.datosLogin.invalid){
      this.notificador.toast.Error("El formulario tiene datos inválidos o sin completar.");

    }else{

      this.service.traerUsuarios()
      .subscribe(
      restItems => {
      this.restItems = restItems;
      this.restItems.forEach(element => {
        if(element.usuario == this.identidad && element.contraseña == this.clave){
          //  sessionStorage.setItem('token',this.restItems.token);
           sessionStorage.setItem('nombre',this.restItems.nombre);
           sessionStorage.setItem('tipoUsuario',this.restItems.tipoUsuario);
           sessionStorage.setItem('apellido',this.restItems.apellido);
           this.router.navigate(['/home']);
           this.flag = false;


        }
        
      });
      debugger;
      if(this.flag){
        this.notificador.toast.Error("Usuario o contraseña incorrectos");
      }
        
      }, error=>{
        this.notificador.toast.Error("Ha ocurrido un error");
        
      })
      

     

    }

  }

  logout(){
  // this.service.restLoginByUser(this.identidad,this.clave)
  // .subscribe(
  // restItems => {
  // this.restItems = restItems;
  // sessionStorage.removeItem('token');
  // sessionStorage.setItem('user',this.restItems.user);
  // console.log(JSON.stringify(this.restItems));
  // }
  // )
  }


  getValidacionNombre(inputName):boolean{

     return this.datosLogin.controls[inputName].invalid && (this.datosLogin.controls[inputName].dirty || this.datosLogin.controls[inputName].touched)

    }


}
