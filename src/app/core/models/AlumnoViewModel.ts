import { Alumno } from "./alumno";


export class AlumnoViewModel {

   
    public  alumno : Alumno;
    public  titulacion : any;
   
    constructor( ){
      
        this.alumno = null;
     
        this.titulacion = null;
    }


    public setAlumno(alum : Alumno){
        this.alumno= alum;
    }
     public setTitulo(tit: any){
         this.titulacion  = tit;
     }

}
