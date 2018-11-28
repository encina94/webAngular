import swal, { SweetAlertResult } from "sweetalert2";

const p = new Promise((resolve) => {
    resolve(4);
});

export class Confirm 
{
    

    constructor() 
    {
        
   
    }


    

    Message(title:string,text:string) {
               
        return new Promise((resolve) => {
            swal(
                {
                title: title,
                text: text,
             
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, estoy seguro.',
                cancelButtonText:"Cancelar"
              }).then((result) => {
                    resolve( result);
              })
        });

    }
  
    


}

interface Promise<T> {
}

function BasicMessage(id:string): Promise<any> {

    return swal(
    {
    title: '¿Estas seguro de eliminar?',
    text: "vas a borrar el valor: ",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, estoy seguro.'
  }
);


}
