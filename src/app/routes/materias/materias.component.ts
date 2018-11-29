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
              this.item.idMateria = element.id;
              this.item.idTema = element.temas[i].id;
              this.temasMaterias.push(this.item);
            }
          
            
          }else{
            this.item = new MateriaViewModel();
            this.item.descripcionMateria = element.descripcion;
            this.item.descripcionTema = "";
            this.item.idMateria = element.id;
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

  open(letRow){
    this.router.navigate(["/profesores/materias/",letRow.idMateria,letRow.idTema]);
  }

  


updateFilter(event) {

  //si lo escrito es de tipo string lo paso a minuscula
  var filtro = (typeof event === "string") ? event.toLowerCase() : event;
  this.temp = this.temasMaterias;

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
