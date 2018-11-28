import { Component, OnInit,ViewEncapsulation  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { NotificationOptions } from '../../core/notifications/notification';
import { ServicesHttpService } from 'src/app/services/services-http.service';
import { MateriaViewModel } from 'src/app/core/models/materiasViewModel';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class MateriasComponent {
  public displayNombre: string;

  //Table
  timeout: any;
  tableOffSet= 0;
  selected = [];
  temp: any = [];
  private _notificador:NotificationOptions;

  columns=[
    {prop:'descripcionMateria',name:'Materia'},
    {prop:'descripcionTema',name:'Tema'},
  ];

  restItems: any = [];
  temasMaterias: any = [];
  item:MateriaViewModel;

  constructor(private router: Router,private http: HttpClient, private service:  ServicesHttpService) {
    // this._notificador = new NotificationOptions();
    this.displayNombre= "Sebastian";
    
    // sessionStorage.getItem("rolActivo") +"( "+sessionStorage.getItem("unidadActivo")+" )";
  }
  
  ngOnInit() {
    this.item = new MateriaViewModel();
    this.getAllMaterias();
 }

  getAllMaterias()
  {
    this.service.traerMaterias()
    .subscribe(
      restItems => {

        this.restItems = restItems;
        this.restItems.forEach(element => {
         
          if(element.temas.length >0){
            for(var i=0; i < element.temas.length; i++){
              this.item = new MateriaViewModel();
              this.item.descripcionMateria = element.descripcion;
              this.item.descripcionTema = element.temas[i].descripcion;
              this.item.idMateria = element.idMateria;
              this.item.idTema = element.temas[i].idTema;
              this.temasMaterias.push(this.item);
            }
          
            
          }else{
            this.item = new MateriaViewModel();
            this.item.descripcionMateria = element.descripcion;
            this.item.descripcionTema = "";
            this.item.idMateria = element.idMateria;
            this.item.idTema = 0;
            this.temasMaterias.push(this.item);
          }
       }); 
        this.temp = this.temasMaterias;
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
    
    return ((d.descripcionMateria) ? d.descripcionMateria.toLowerCase().indexOf(filtro) !== -1 : false)
          ||((d.descripcionTema) ? d.descripcionTema.toLowerCase().indexOf(filtro) !== -1 : false)
     
        
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
