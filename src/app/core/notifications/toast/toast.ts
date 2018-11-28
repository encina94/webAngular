import swal from "sweetalert2";

export class Toast
{

    constructor() {  }

    //Mensajes de alerta
    Warning(_titulo:string)
    {

      const toast = (swal as any).mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        animation:false
      });

      toast({
        type: 'warning',
        title: _titulo
      })

    }

    Success(_titulo:string)
    {

      const toast = (swal as any).mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        animation:false
      });

      toast({
        type: 'success',
        title: _titulo
      })

    }

    Error(_titulo:string)
    {

      const toast = (swal as any).mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        animation:false
      });

      toast({
        type: 'error',
        title: _titulo
      })

    }

}
