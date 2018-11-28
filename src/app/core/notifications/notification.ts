import { Toast } from "./toast/toast";
import { Input } from "./input/input";
import { Confirm } from "./confirm/confirm";
import { Alert } from "./alert/alert";

export class NotificationOptions 
{
   public toast: Toast; 
   public input: Input;
   public confirm: Confirm;
   public alert: Alert;


    constructor() 
    {
       this.toast= new Toast();
       this.input=new Input();
       this.confirm=new Confirm();
       this.alert=new Alert();
    }

    

}
