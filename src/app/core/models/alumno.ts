

export class Alumno {
    public  aluId: number;
    public  aluCu: string;
    public  aluTitulacionId : number;
    public  aluTitulacionCu : string;
    public  aluPersId : number;
    public  aluPersCu :string;
    public  aluCohorte: number;
    public  aluEstado : string;
    public fechaAdmision: Date;
    public uOrganicalogin: number;

constructor(){
    this.aluId= 0;
    this.aluCu= "";
    this.aluTitulacionId = 0;
    this.aluTitulacionCu = "";
    this.aluPersId = 0;
    this.aluPersCu ="";
    this.aluCohorte= new Date().getFullYear();
    this.aluEstado = "";
    this.fechaAdmision= new Date();
    this.uOrganicalogin = null;
}

}
