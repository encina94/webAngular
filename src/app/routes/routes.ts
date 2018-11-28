
import { LoginComponent } from "./login/login.component";
import { HomeEstudianteComponent } from "./home/homeEstudiante/homeEstudiante.component";
import { HomeProfesorComponent } from "./home/homeProfesor/homeProfesor.component";
import { HomeComponent } from "./home/home.component";





export const routes = [
   
    { path: 'login', component: LoginComponent},
    { path: '', component:HomeComponent},
    { path: 'home',component:HomeComponent},
    { path: 'homeEstudiantes', component:HomeEstudianteComponent},
    { path: 'homeProfesor', component:HomeProfesorComponent},
    

    ];
