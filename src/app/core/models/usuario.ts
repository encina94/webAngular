
export class Usuario {
    public  id: number;
    public  nombre: string;
    public  apellido: string;
    public  email: string;
    public  direccion: string;
    public  usuario: string;
    public  contraseña:string;
    public  tipoUsuario :number;
    public  telefono: string;
    public  social:string;
   

constructor(){
    this.id= 0;
    this.nombre= "";
    this.apellido= "";
    this.email= "";
    this.direccion= "";
    this.usuario= "";
    this.tipoUsuario= null;
    this.contraseña = "";
    this.telefono= "";
    this.social = "";
   
}
  
}


// {"id":3,"nombre":"Santino Alejandro","apellido":"Mendez","email":"mendezsantino.e@gmail.com","direccion":"Batalla oncativo 1494","telefono":"42744254",
// "usuario":"smendez","contraseña":"smendez",
// "tipoUsuario":"Estudiante",
// "puntuaciones":[],"repositorios":[]}]