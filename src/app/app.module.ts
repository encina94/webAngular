import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutesModule } from './routes/routes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule, DatatableComponent} from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ToasterService, ToasterModule } from 'angular2-toaster';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import {DndModule} from 'ng2-dnd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgxSpinnerModule } from 'ngx-spinner';
import { DatepickerModule, BsDatepickerModule,BsLocaleService } from 'ngx-bootstrap/datepicker';
import { DatePickerService } from './services/datepicker/datepicker.service';
import { HttpClientModule } from '@angular/common/http';
import { ServicesHttpService } from './services/services-http.service';
import { LoginComponent } from './routes/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeEstudianteComponent } from './routes/home/homeEstudiante/homeEstudiante.component';
import { HomeComponent } from './routes/home/home.component';
import { HomeProfesorComponent } from './routes/home/homeProfesor/homeProfesor.component';
import { MateriasComponent } from './routes/materias/materias.component';
import { ProfesoresComponent } from './routes/profesores/profesores.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    HomeEstudianteComponent,
    HomeComponent,
    HomeProfesorComponent,
    MateriasComponent,
    ProfesoresComponent
    
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required for ng2-tag-input
    ToasterModule.forRoot(),
    SweetAlert2Module.forRoot(),
    NgxDatatableModule,
    DndModule.forRoot(),
    NgxSpinnerModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot()
  ],
  providers: [ServicesHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
