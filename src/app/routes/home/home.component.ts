import { Component } from '@angular/core';
import {ServicesHttpService} from '../../services/services-http.service'
import { HttpClient } from '@angular/common/http';
import { Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  rol:any;
  unidad:any;
  tipo:any;
  funcion:any;

  
  constructor(private http: HttpClient, private service:  ServicesHttpService) {}
 
  onVoted(agreed: string) {
    this.rol = agreed;
  }
  onVotedUnidad(agreed: string) {
    this.unidad = agreed;
  }
  onVotedTipo(agreed: string) {
    this.tipo = agreed;
  }
  onVotedFuncion(agreed: string) {
    this.funcion = agreed;
  }
  
}
