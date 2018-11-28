import { Component, OnInit } from '@angular/core';
import { ServicesHttpService } from '../../services/services-http.service';
import { forEach } from '@angular/router/src/utils/collection';
import { Input ,EventEmitter} from '@angular/core';
import { Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  uoId: any;

  restItems= [];
  restItemsTotal= [];
  usuario:any;
  roles:any;
  rol="";
  organizacion="";
  unidad:any;
  count = 0;
  funcion: any;
  tipo:any;
  funciones="";
  tipos="";
  @Output() rolesUser = new EventEmitter<string>();
  @Output() unidadUser = new EventEmitter<string>();
  @Output() tipoUser = new EventEmitter<string>();
  @Output() funcionUser = new EventEmitter<string>();
  constructor(private service:  ServicesHttpService, private router: Router) {

   }


  ngOnInit() {
  //   if(sessionStorage.getItem("rolActivo") === undefined || sessionStorage.getItem("rolActivo") === "" || sessionStorage.getItem("rolActivo") === null ){
  //     this.traerPerfilUsuario();
  //   }else{
  //     this.mostrarVista(sessionStorage.getItem("rolActivo"), sessionStorage.getItem("unidadActivo"), sessionStorage.getItem("funcionActivo"), sessionStorage.getItem("tipoActivo"),sessionStorage.getItem("idUO") )
  //     this.service.traerPerfil(this.usuario).subscribe(
  //       restItems => {
  //         this.restItemsTotal = restItems;
  //   });
  // }

  }

  goHome(){
    this.router.navigate(["/home"]);
  }

  vote(roles: string) {
    this.rolesUser.emit(roles);
  }
  voteUnidad(unidad: string) {
    this.unidadUser.emit(unidad);
  }
  voteTipo(tipo: string) {
    this.tipoUser.emit(tipo);
  }
  voteFuncion(funcion: string) {
    this.funcionUser.emit(funcion);
  }
  traerPerfilUsuario(){
    this.usuario =  sessionStorage.getItem('user');

    // this.service.traerPerfil(this.usuario).subscribe(
    //   restItems => {
    //     this.restItemsTotal = restItems;
    //     this.mostrarVista(restItems[0].roles,restItems[0].unidad,restItems[0].funcion,restItems[0].tipo,restItems[0].uoId);

    //     for(var x= 0; x< restItems.length; x++){
    //       this.rol =  this.rol.concat(restItems[x].roles.toString()+" ");
    //       this.organizacion =  this.organizacion.concat(restItems[x].unidad.toString()+" ");
    //       if(restItems[x].funcion==null){
    //         restItems[x].funcion = "";
    //       }
    //       if(restItems[x].tipo==null){
    //         restItems[x].tipo="";
    //       }
    //       this.funciones =  this.funciones.concat(restItems[x].funcion.toString()+" ");
    //       this.tipos =  this.tipos.concat(restItems[x].tipo.toString()+" ");
    //     }
    //     sessionStorage.setItem('roles',this.rol);
    //     sessionStorage.setItem('organizaciones',this.organizacion);
    //     sessionStorage.setItem('funciones',this.funciones);
    //     sessionStorage.setItem('tipos',this.tipos);
    //     sessionStorage.setItem('rolActivo', this.roles)
    //     sessionStorage.setItem('unidadActivo', this.unidad)
    //     sessionStorage.setItem('funcionActivo', this.funcion)
    //     sessionStorage.setItem('tipoActivo', this.tipo)
    //     sessionStorage.setItem('idUO', this.uoId)
    //     this.vote(this.roles);
    //     this.voteUnidad(this.unidad);
    //     this.voteTipo(this.tipo);
    //     this.voteFuncion(this.funcion);
    //   }

    // )

    }

    cambiarRol(obj){
      this.usuario =  sessionStorage.getItem('user');

          // this.service.traerPerfil(this.usuario)
          // .subscribe(
          //   item => {
          //     this.restItemsTotal = item;
          //     for(var x= 0; x< this.restItemsTotal.length; x++){
          //         if(this.restItemsTotal[x].roles == obj.roles && this.restItemsTotal[x].unidad == obj.unidad && this.restItemsTotal[x].funcion == obj.funcion){
          //           this.mostrarVista(obj.roles,obj.unidad,obj.funcion,obj.tipo,obj.uoId);
          //           this.router.navigate(["/home"]);

          //         }
          //     }
          //     sessionStorage.setItem('rolActivo', this.roles)
          //     sessionStorage.setItem('unidadActivo', this.unidad)
          //     sessionStorage.setItem('tipoActivo', this.tipo)
          //     sessionStorage.setItem('funcionActivo', this.funcion)
          //     sessionStorage.setItem('idUO', this.uoId)


          //     this.vote(this.roles);
          //     this.voteUnidad(this.roles);
          //     this.voteTipo(this.tipo);
          //     this.voteFuncion(this.funcion);
          //     console.log(JSON.stringify(this.restItemsTotal));
          //   }

          // )
        }

        mostrarVista(roles,unidad,funcion,tipo,uoId){
          this.roles = roles;
          this.unidad = unidad;
          this.funcion = funcion;
          this.tipo = tipo;
          this.uoId = uoId;
          this.usuario =  sessionStorage.getItem('user');
          this.vote(this.roles);
          this.voteUnidad(this.unidad);
          this.voteTipo(this.tipo);
          this.voteFuncion(this.funcion);

         }

         logout(){
           sessionStorage.removeItem("token");
           sessionStorage.removeItem("funcionActivo");
           sessionStorage.removeItem("idUO");
           sessionStorage.removeItem("funciones");
           sessionStorage.removeItem("rolActivo");
           sessionStorage.removeItem("organizaciones");
           sessionStorage.removeItem("roles");
           sessionStorage.removeItem("tipoActivo");
           sessionStorage.removeItem("unidadActivo");
           sessionStorage.removeItem("user");
           this.router.navigate(["/login"]);
         }
}
