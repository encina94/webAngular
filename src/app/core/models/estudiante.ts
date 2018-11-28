
export class Estudiante {
    public  id: number;
    public  nombre: string;
    public  apellido: string;
    public  email: string;
    public  direccion: string;
    public  telefono: number;
    public  usuario: string;
    public  contraseña: string;
    public  tipoUsuario: string;
   

constructor(){
    this.id= 0;
      this.nombre= "";
      this.apellido= "";
      this.email= "";
      this.direccion= "";
      this.telefono= 0;
      this.usuario= "";
      this.contraseña= "";
      this.tipoUsuario= "";
}