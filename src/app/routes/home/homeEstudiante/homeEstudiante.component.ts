import { Component } from '@angular/core';
import {ServicesHttpService} from '../../../services/services-http.service'
import { HttpClient } from '@angular/common/http';
import { Input } from '@angular/core';

@Component({
  selector: 'app-homeEstudiante',
  templateUrl: './homeEstudiante.component.html',
  styleUrls: ['./homeEstudiante.component.css']
})

export class HomeEstudianteComponent {

  constructor(private http: HttpClient, private service:  ServicesHttpService) {}



}
