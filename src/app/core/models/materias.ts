import { Temas } from "./temas";
export class Alumno {
    public  id: number;
    public  descripcion: string;
    public  temas :Array<Temas>;
   

constructor(){
    this.id= 0;
    this.descripcion= "";
    this.temas= [];
}
  
}
