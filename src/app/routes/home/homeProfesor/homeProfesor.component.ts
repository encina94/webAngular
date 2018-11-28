import { Component } from '@angular/core';
import {ServicesHttpService} from '../../../services/services-http.service'
import { HttpClient } from '@angular/common/http';
import { Input } from '@angular/core';

@Component({
  selector: 'app-homeProfesor',
  templateUrl: './homeProfesor.component.html',
  styleUrls: ['./homeProfesor.component.css']
})

export class HomeProfesorComponent {

  constructor(private http: HttpClient, private service:  ServicesHttpService) {}

}
