import { Component, OnInit,ViewEncapsulation  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { NotificationOptions } from '../../core/notifications/notification';

@Component({
  selector: 'app-inscripcionClases',
  templateUrl: './inscripcionClases.component.html',
  styleUrls: ['./inscripcionClases.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class inscripcionClasesComponent {
  public displayNombre: string;

  //Table
  timeout: any;
  tableOffSet= 0;
  selected = [];
  temp: any = [];
  private _notificador:NotificationOptions;

  columns=[
    {prop:'uoOrg.orgTipo',name:'Tipo'},
    {prop:'uoNombre',name:'Nombre'},
    {prop:'uoNivel', name: 'Nivel'},
    {prop:'uoModalidad', name:'Modalidad'},
    {prop:'uoLocalidad',name:'Localidad'},
  ];

  restItems: any = [];

  constructor(private router: Router,private http: HttpClient, private service:  OrganizacionService) {
    this._notificador = new NotificationOptions();
    this.displayNombre= sessionStorage.getItem("rolActivo") +"( "+sessionStorage.getItem("unidadActivo")+" )";
  }
  
  ngOnInit() {
    this.getAllOrganizaciones();
 }

  getAllOrganizaciones()
  {
    this.service.getOrganizacion()
    .subscribe(
      restItems => {
        this.restItems = restItems;
        this.temp = restItems;
      }
    )
  }

  newOrganizacion()
  {
    
    this.router.navigate(["/organizaciones/alta"]);
  }

  open(value){
    var object ={id:value,nombre:"ver"}
    this.router.navigate(["/organizaciones/ver",value]);
  }

  edit(value){
    this.router.navigate(["/organizaciones/editar",value]);
  }



//**********************
// delete(value) {
//   this._notificador.confirm.Message("Eliminar Organización","¿Desea continuar?")
//   .then(
//     (result)=>{ 
//       var r=(result as any).value;
//       if(r){
//         {
//          this.service.deleteOrganizacion(value).subscribe(res => {
//           this._notificador.toast.Success("Eliminado Correctamente")
//           this.getAllOrganizaciones();
//         },
//             err => {
//               var error  = err.error;
//               if(error.includes("desasocie")){
//                 this._notificador.alert.BasicMessage(err.error)
//                 // this._notificador.toast.Error("No se pudo eliminar")
//               }
//               else{
//                 this._notificador.toast.Error("No se pudo eliminar")
//               }
//               console.log(err)}
//              );
//         }
//       }
//       else{
//         this.getAllOrganizaciones();
//       }
  
//       })
    
 
// }


updateFilter(event) {

  //si lo escrito es de tipo string lo paso a minuscula
  var filtro = (typeof event === "string") ? event.toLowerCase() : event;
  this.temp = this.restItems;

  //filtro por cualquiera de las 4 columnas
  const temp1 = this.temp.filter(function (d) {
    
    return ((d.uoOrg.orgTipo.tipo) ? d.uoOrg.orgTipo.tipo.toLowerCase().indexOf(filtro) !== -1 : false)
          ||((d.uoNombre) ? d.uoNombre.toLowerCase().indexOf(filtro) !== -1 : false)
          || ((d.uoNivel) ? d.uoNivel.toLowerCase().indexOf(filtro) !== -1 : false)
          || ((d.uoModalidad) ? d.uoModalidad.toLowerCase().indexOf(filtro) !== -1: false)
          || ((d.uoLocalidad) ? d.uoLocalidad.toLowerCase().indexOf(filtro) !== -1 : false)
        
  });

  // actualizo las filas
  this.temp = temp1;

  // si el filtro cambia, vuelvo a la primera pagina
  this.tableOffSet = 0;
}


  onSelect({ selected }) {
    this.selected[selected[0]];
  }

  onChange(event: any): void {
    this.tableOffSet = event.offset;
  }

  volver(){
    this.router.navigate(["/organizaciones"]);
  }
}
