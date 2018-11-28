export class Filter {

  public id:number;
  public start:Date;
  public end:Date;

  constructor(){
    this.id=0;
    this.start=new Date();
    this.end=new Date();
  }

}
