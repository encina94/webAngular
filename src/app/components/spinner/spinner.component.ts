import { NgxSpinnerService } from 'ngx-spinner';
import { Component } from '@angular/core';

@Component({
    selector: 'spinner',
    templateUrl: './spinner.component.html'
  })
  
export class SpinnerComponent {

  constructor(private Service:NgxSpinnerService)
  {
    
  }

  show(){
    this.Service.show();
  }

  hide(){
    this.Service.hide();
  }
}    
