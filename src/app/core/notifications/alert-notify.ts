
import swal, { SweetAlertResult } from 'sweetalert2';

export class AlertNotify
{
   public title:string;
   public text: string;
   public type:string;
   public showCancelButton: true;
   public confirmButtonColor:string; 
   public cancelButtonColor:string; 
   public confirmButtonText:string; 

   public ConfirnAlert:any;
   public toast:any;

    constructor() 
    {
     
      this.title= '¿Estas seguro de eliminar?';
       this.text= "vas a borrar el valor: ";
       this.type= 'warning';
       this.showCancelButton=true;
       this.confirmButtonColor='#3085d6';
       this.cancelButtonColor='#d33';
       this.confirmButtonText='Si, estoy seguro.';
    }


    Notificacion(_type:string,_titulo:string)
    {

      const toast = (swal as any).mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });
     
      toast({
        type: 'warning',
        title: _titulo
      })
    
    }

    Confirmacion()
    {


    //   swal(
    //     {
    //     title: '¿Estas seguro de eliminar?',
    //     text: "vas a borrar el valor: ",
    //     type: 'warning',
    //     showCancelButton: true,
    //     confirmButtonColor: '#3085d6',
    //     cancelButtonColor: '#d33',
    //     confirmButtonText: 'Si, estoy seguro.'
    //   }
    // ).then((result) => {
    //     if (result.value) {
    //       swal(
    //         'Eliminado!',
    //         'La carrera fue eliminada.',
    //         'success'
    //       )
    //     }
     
    //   })

    }


}
