import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '../../../../node_modules/@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { NotificationOptions } from '../../core/notifications/notification';
import { Usuario } from 'src/app/core/models/usuario';
import { ServicesHttpService } from 'src/app/services/services-http.service';




@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UsuarioComponent implements OnInit {


  public soloVer: boolean;
  public _notificacion : NotificationOptions;
  public usuario: Usuario;
  public verTabla: boolean;
  public modoVisualizacion: boolean;
  public formUsuario:FormGroup;
  public nombreBoton:String;
  public clave:string;


  // public  nombre: string;
  // public  apellido: string;
  // public  email: string;
  // public  direccion: string;
  // public  usuario: string;
  // public  tipoUsuario :string;
  // public  telefono: number;


  constructor(private route: ActivatedRoute, private http: HttpClient, private fb: FormBuilder,private service:  ServicesHttpService,  private router: Router) {
    this.usuario = new Usuario();
    this._notificacion = new NotificationOptions();
    this.modoVisualizacion = false;
    this.nombreBoton = "GUARDAR";
    this.clave = "";
    this.formUsuario= this.fb.group({
      tipoUsuario: [null, Validators.required],
      usuario: [null, Validators.required],
      pass: [null, Validators.required],
      nombre: [null, Validators.required],
      apellido :[null, Validators.required] ,
      email: [null, Validators.email],
      direccion : [null,Validators.required],
      telefono: [null, Validators.required],
    })
  }
  ngOnInit() {
 
  }


  

guardar(){
  if(this.formUsuario.invalid){
    this.formUsuario.controls.tipoUsuario.markAsTouched();
    this.formUsuario.controls.usuario.markAsTouched();
    this.formUsuario.controls.pass.markAsTouched();
    this.formUsuario.controls.nombre.markAsTouched(); 
    this.formUsuario.controls.apellido.markAsTouched();
    this.formUsuario.controls.email.markAsTouched();
    this.formUsuario.controls.direccion.markAsTouched();
    this.formUsuario.controls.telefono.markAsTouched();
    this._notificacion.toast.Error("Debe completar los campos obligatorios")
  }
  else{
    
      if(this.nombreBoton =="GUARDAR"){
        this.usuario.contraseña = this.clave;
        this.service.crearusuario(this.usuario).subscribe(
        success=>{
            this._notificacion.toast.Success("Se creó con éxito");
        },
        error=>{
            console.log(error);
            this._notificacion.toast.Error("Ocurrió un error") 
            }
        )}
    else{
        // this.service.editarusuario(this.usuario).subscribe(
        // success =>{
        //     this._notificacion.toast.Success("Se editó con éxito")
        // },
        // error=>{
        //     console.log(error);
        //     this._notificacion.toast.Error("Ocurrió un error") 
        // })
    }
  }
}

      getValidacion(input):boolean{
        return this.formUsuario.controls[input].invalid  && ( this.formUsuario.controls[input].dirty || this.formUsuario.controls[input].touched )
        }
 

}
