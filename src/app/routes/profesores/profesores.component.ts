
import { Component, OnInit,ViewEncapsulation  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { NotificationOptions } from '../../core/notifications/notification';
import { ServicesHttpService } from 'src/app/services/services-http.service';
import { MateriaViewModel } from 'src/app/core/models/materiasViewModel';
import { ProfesorViewModel } from 'src/app/core/models/profesoresViewModel';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ProfesoresComponent {
  public displayNombre: string;

  //Table
  timeout: any;
  tableOffSet= 0;
  selected = [];
  temp: any = [];
  private _notificador:NotificationOptions;

  columns=[
    {prop:'nombre',name:'Nombre'},
    {prop:'apellido',name:'Apellido'},
    {prop:'email',name:'Email'},
    {prop:'direccion',name:'Direccion'},
    {prop:'telefono',name:'Telefono'},
    {prop:'tarifa',name:'Tarifa'},
    {prop:'referencias',name:'Referencia'},
  ];

//   [{"id":2,"nombre":"Sebastian","apellido":"Encina","email":"encina.sebastian94@gmail.com",
//   "direccion":"Calle falsa 123","telefono":"43222523","usuario":"sencina","contraseña":"sencina",
//   "tipoUsuario":"Profesor","social":"https://www.linkedin.com/in/sebastian-encina-157835135/","tarifas"
//   :[{"id":1,"tarifa":250.0,"vigenciadesde":"2018-01-01T00:00:00.000+0000","vigenciahasta":"2019-01-01T00:00:00.000+0000"}],
//   "puntuaciones":[{"id":1,"puntuacion":5,"fecha":"2018-11-02T13:25:00.000+0000"}],
//   "repositorios":[{"id":1,"materia":{"id":1,"descripcion":
//   "Matematica I","temas":[{"id":6,"descripcion":"Limite y continuidad"},{"id":7,"descripcion":"Derivadas"}]},
//   "problema":"Como resolver la siguiente ecuacion diferencial de 1er orden por variables separables?",
//   "solucion":"Ni idea, preguntale a otro."}],
//   "referencias":[{"id":1,"descripcion":"Profesor en Universidad Nacional Arturo Jauretche"},
//   {"id":2,"descripcion":"Programador Senior en Google SRL"}],
//   "oferta":[{"ofertaid":2,"materia":{"id":2,"descripcion":"Matematica II","temas":[{"id":2,"descripcion":"Integrales dobles"},
//   {"id":1,"descripcion":"Matrices y Vectores"},{"id":3,"descripcion":"Integrales triples"}]},"tema":{"id":2,"descripcion":
//   "Integrales dobles"}},{"ofertaid":1,"materia":{"id":1,"descripcion":"Matematica I","temas":[{"id":6,"descripcion":
//   "Limite y continuidad"},{"id":7,"descripcion":"Derivadas"}]},"tema":{"id":1,"descripcion":"Matrices y Vectores"}},
//   {"ofertaid":3,"materia":{"id":3,"descripcion":"Matematicas III","temas":[{"id":4,"descripcion":
//   "Ecuaciones diferenciales de 1er orden"},{"id":5,"descripcion":"Ecuaciones diferenciales de 2do orden"}]},
//   "tema":{"id":3,"descripcion":"Integrales triples"}},{"ofertaid":4,"materia":
//   {"id":4,"descripcion":"Fisica I","temas":[]},"tema":{"id":4,"descripcion":"Ecuaciones diferenciales de 1er orden"}}]}]

  restItems: any = [];
  profesores: any = [];
  materiaTema: any;
  profesoresModel: Array<ProfesorViewModel> = [];
  item: ProfesorViewModel;

  constructor(private router: Router,private http: HttpClient, private service:  ServicesHttpService, private route: ActivatedRoute) {
    this._notificador = new NotificationOptions();
    this.route.params.subscribe( params => this.materiaTema= params); 
    this.displayNombre= "Sebastian";
    
    // sessionStorage.getItem("rolActivo") +"( "+sessionStorage.getItem("unidadActivo")+" )";
  }
  
  ngOnInit() {
   this.profesoresModel = new Array<ProfesorViewModel>();

    this.getAllProfesores();
 }

  getAllProfesores()
  {
      if(this.materiaTema.idTemas!=0){
   
        this.service.traerProfesoresByTemaMateria(this.materiaTema.idTemas,this.materiaTema.idMaterias)
        .subscribe(
          restItems => {
 
            this.restItems = restItems;
    
            this.restItems.forEach(element => {
                  this.item = new ProfesorViewModel();
                  this.item.nombre = element.nombre;
                  this.item.apellido = element.apellido;
                  this.item.email = element.email;
                  this.item.direccion = element.direccion;
                  this.item.telefono = element.telefono;
                  this.item.tarifa = element.tarifas[0].tarifa;
                  this.item.referencias = element.referencias[0].descripcion;
                  this.profesoresModel.push(this.item);
            });
            this.temp = this.profesoresModel;
          },
          error=>{
          this._notificador.toast.Error("No hay profesores asignados a este tema");
          }
        )
      }else{
          debugger;
        this.service.traerProfesoresByMateria(this.materiaTema.idMaterias)
        .subscribe(
          restItems => {
    
            this.restItems = restItems;
            this.restItems.forEach(element => {
              this.item = new ProfesorViewModel();
              this.item.nombre = element.nombre;
              this.item.apellido = element.apellido;
              this.item.email = element.email;
              this.item.direccion = element.direccion;
              this.item.telefono = element.telefono;
              this.item.tarifa = element.tarifas[0].tarifa;
              this.item.referencias = element.referencias[0].descripcion;
              this.profesoresModel.push(this.item);
        });
           
        this.temp = this.profesoresModel;
          },
          error=>{
        
            this._notificador.toast.Error("No hay profesores asignados a esta materia");
    
            })
      }
   
  
  }

 

  open(value){
    var object ={id:value,nombre:"ver"}
    this.router.navigate(["/profesores/ver",value]);
  }

  


updateFilter(event) {

  //si lo escrito es de tipo string lo paso a minuscula
  var filtro = (typeof event === "string") ? event.toLowerCase() : event;
  this.temp = this.profesoresModel;

  //filtro por cualquiera de las 4 columnas
  const temp1 = this.temp.filter(function (d) {
    
    return ((d.nombre) ? d.nombre.toLowerCase().indexOf(filtro) !== -1 : false)
          ||((d.apellido) ? d.apellido.toLowerCase().indexOf(filtro) !== -1 : false)
          ||((d.email) ? d.email.toLowerCase().indexOf(filtro) !== -1 : false)
          ||((d.direccion) ? d.direccion.toLowerCase().indexOf(filtro) !== -1 : false)
          ||((d.telefono) ? d.telefono.toLowerCase().indexOf(filtro) !== -1 : false)
          ||((d.tarifa) ? d.tarifa.toLowerCase().indexOf(filtro) !== -1 : false)
          ||((d.puntuacion) ? d.puntuacion.toLowerCase().indexOf(filtro) !== -1 : false)
          ||((d.descripcion) ? d.descripcion.toLowerCase().indexOf(filtro) !== -1 : false)
     
        
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

