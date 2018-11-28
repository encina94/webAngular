export class Acreditacion {
    public  acrId :number;
    public  acrCu : string;
    public  acrAluId : number;
    public  acrAluCu :string;
    public  acrUcId:number;
    public  acrUcCu : string;
    public  acrFecha : Date;
    public  acrNota : string;
    public  acrTipo : string;
    public  acrLibroMatriz:string;
    public  acrCicloLectivo : number;
    public  acrLugar : string;
    public  acrNotaDeCursada  : string;
    public  acrEstado  : string;
    public  acrUoId : number;
    public  acrUoCu : string;
    public  acrFechaCursada : Date;
    public  acrFechaVencimiento: Date;
    public  acrCdaCursadaOrigId : number;
    public  acrCdaCursadaOrigCu : string;
    public acrImeInscMeorigId: number;
    public  acrImeInscMeorigCu : string;
    public nombreUC : string;
    public tipoUC: string;
    public acrAlu:  any;
    public  acrFechaMostrar : string;
    public  acrFechaVencimientoMostrar: string;
    public  acrFechaCursadaMostrar : string;


    constructor(){
        this.acrId = 0;
        this.acrCu = "";
        this.acrAluId  = 0;
        this.acrAluId = 0;
        this.acrAluCu = "";
        this.acrUcId=0;
        this.acrUcCu = "";
        this.acrFecha = null;
        this.acrNota = "";
        this.acrTipo = "";
        this.acrLibroMatriz="";
        this.acrCicloLectivo = new Date().getFullYear() - 1;
        this.acrLugar = "";
        this.acrNotaDeCursada  = "";
        this.acrEstado  = "";
        this.acrUoId = null;
        this.acrUoCu = "";
        this.acrFechaCursada = null;
        this.acrFechaVencimiento= null;
        this.acrCdaCursadaOrigId = null;
        this.acrCdaCursadaOrigCu = "";
        this.acrImeInscMeorigId= null;
        this.acrImeInscMeorigCu = "";
        this.nombreUC = "";
        this.tipoUC = "";
        this.acrAlu = null;
        

    }
}
