import { routes } from './routes';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';





@NgModule({
    imports: [
    RouterModule.forRoot(routes),
    ],
    declarations:[
     ],
    exports: [
    RouterModule
    ]
    })

    export class RoutesModule {
      constructor() {}
    }



