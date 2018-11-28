import swal from "sweetalert2";

export class Alert 
{

    constructor()  {   }


    BasicMessage(text:string){
        swal( text );
    }

    MessageQuestion(title:string,subtitle:string){
        swal(
            title,
            subtitle,
            'question'
          )
    }

    MessageSuccess(title:string,subtitle:string){
        swal(
            title,
            subtitle,
            'success'
          )
    }



}
