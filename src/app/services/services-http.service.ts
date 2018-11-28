import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions, RequestOptionsArgs, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Puntuacion } from '../core/models/puntuacion';


@Injectable({
  providedIn: 'root'
})
export class ServicesHttpService {
  rest = environment.restApiUrl;
  selectedItemTable: any;
  personaId: any;

  constructor(private http: HttpClient) { }

  
  traerMaterias() {
   
    return this.http
      .get(this.rest+"/api/materias"); 
   }

   traerProfesores(){
    return this.http
    .get(this.rest+"/api/profesores"); 
 }

 traerProfesoresTarifas(){
  return this.http
  .get(this.rest+"/api/tarifas"); 
 }


 puntuar(puntuacion:Puntuacion){
    return this.http.post<Puntuacion>(this.rest +"/api/puntuaciones", puntuacion)
      .subscribe();
 }

//  altaUsuario(usuario:Usuario){
//   return this.http.post<Puntuacion>(this.rest +"/api/usuarios", usuario)
//   .subscribe();
//  }

//  traerUsuario(usuario:string,pass:string){
//   return this.http
//   .get(this.rest+"/api/usuarios",); 
//  }



   }



  // traerPersonaPorId(id) {
  //   return this.http
  //     .get(this.restItemsUrlPersonas +"/api/v1.0/Persona/"+ id); 
  //  }
   
  // deletePersonas(persId) {

  //   return this.http.delete<any[]>(this.restItemsUrlPersonas + "/api/v1.0/Persona/"+ persId);

  // }

  // editarPersonas(id,persCu, persDesc, persApellidos, persNombres, persTipoDocumento, persDocumento, persCuil, persFechaDeNacimiento, persSexo, persNacionalidad, persEstadoCivil, persLocalidadDeNacimiento, persDomicilioAmbiente, persDomicilioLocalidad, persDomicilioCalle, persDomicilioNro, persDomicilioPiso, persDomicilioDepto, persDomicilioBarrio, persDomicilioReferencia, persDomicilioCodPostal, persDomicilioGeoRef, persFoto, persContactoEmail, persContactoTelefono, persContactoOtros, persLenguaFamiliar, persCredo, persPuebloOriginario, persDiscapacidades, persPrivacionDeLibertad, persInternacionHospitalaria, persAtencionesEspeciales, persBeneficiosYcompensaciones, persProgramasYproyectos, persGrupoSanguineo, persJubilacion, persRetiro, persAptitudPsicofisica, persAptitudPsicoFisicaDesde, persAptitudPsicoFisicaHasta, persFamiliares, persTitulos, persCapacitaciones, persAntecedentes, persFechaAlta, persFechaBaja, persFechaUltModif, persUsuarioAlta, persUsuarioUltModif, persUsuario):  any  {
  //   var ps = [];

  //   var  foods  =  { "persId": id, "persCu": persCu, "persDesc": persDesc, "persApellidos": persApellidos, "persNombres": persNombres, "persTipoDocumento": persTipoDocumento, "persDocumento": persDocumento, "persCuil": persCuil, "persFechaDeNacimiento": persFechaDeNacimiento, "persSexo": persSexo, "persNacionalidad": persNacionalidad, "persEstadoCivil": persEstadoCivil, "persLocalidadDeNacimiento": persLocalidadDeNacimiento, "persDomicilioAmbiente": persDomicilioAmbiente, "persDomicilioLocalidad": persDomicilioLocalidad, "persDomicilioCalle": persDomicilioCalle, "persDomicilioNro": persDomicilioNro, "persDomicilioPiso": persDomicilioPiso, "persDomicilioDepto": persDomicilioDepto, "persDomicilioBarrio": persDomicilioBarrio, "persDomicilioReferencia": persDomicilioReferencia, "persDomicilioCodPostal": persDomicilioCodPostal, "persDomicilioGeoRef": persDomicilioGeoRef, "persFoto": persFoto, "persContactoEmail": persContactoEmail, "persContactoTelefono": persContactoTelefono, "persContactoOtros": persContactoOtros, "persLenguaFamiliar": persLenguaFamiliar, "persCredo": persCredo, "persPuebloOriginario": persPuebloOriginario, "persDiscapacidades": persDiscapacidades, "persPrivacionDeLibertad": persPrivacionDeLibertad, "persInternacionHospitalaria": persInternacionHospitalaria, "persAtencionesEspeciales": persAtencionesEspeciales, "persBeneficiosYcompensaciones": persBeneficiosYcompensaciones, "persProgramasYproyectos": persProgramasYproyectos, "persGrupoSanguineo": persGrupoSanguineo, "persJubilacion": persJubilacion, "persRetiro": persRetiro, "persAptitudPsicofisica": persAptitudPsicofisica, "persAptitudPsicoFisicaDesde": persAptitudPsicoFisicaDesde, "persAptitudPsicoFisicaHasta": persAptitudPsicoFisicaHasta, "persFamiliares": persFamiliares, "persTitulos": persTitulos, "persCapacitaciones": persCapacitaciones, "persAntecedentes": persAntecedentes, "persFechaAlta": persFechaAlta, "persFechaBaja": persFechaBaja, "persFechaUltModif": persFechaUltModif, "persUsuarioAlta": persUsuarioAlta, "persUsuarioUltModif": persUsuarioUltModif, "persUsuario": persUsuario };

  //   return  this.http.put<any[]>(this.restItemsUrlPersonas + "/api/v1.0/Persona", foods)
  //     .pipe(map(data  =>  data));
  // }


  // altaNomenclador(ndependiente, vdependiente, valor, codigo, estado, nomenclador) {

  //   var foods = { "cun": codigo, "nomenclador": nomenclador, "codigo": codigo, "valor": valor, "valorNomencladorMarco": "hola" };
    
  //   return this.http.post<any[]>(this.restItemsUrlNomenclador + "/api/v1.0/Nomenclador/AltaNomenclador", foods)
  //     .subscribe();


  // }


  // traerNomenclador() {
  //   return this.http
  //     .get(this.restItemsUrlNomenclador + "/api/v1.0/Nomenclador/TraerNomencladores")
  //     .pipe(map(data => data));
  // }


  // traerPerfil(identidad) {
  //   var foods = { "user": identidad };
  //   return this.http
  //   .post<any[]>(this.restItemsUrlAuth+"/api/v1.0/Perfiles",foods )
  //   .pipe(map(data => data));
  //   }

  // altaPersonasAntecedente(antNombre, antTipo, antAnio, antFecha, antDescripcion)  {

  //   var foods = { "nombre": antNombre, "tipo": antTipo,"ano": antAnio,"fecha": antFecha, "descripcion": antDescripcion };
  //    return this.http.post<any[]>(this.restItemsUrlPersonas+"/api/v1.0/Antecente",foods )
  //    .subscribe();


  //   }
    

  //   altaPersonas(persCu,persDesc,persApellidos,persNombres,persTipoDocumento,persDocumento,persCuil,persFechaDeNacimiento,persSexo,persNacionalidad,persEstadoCivil,persLocalidadDeNacimiento,persDomicilioAmbiente,persDomicilioLocalidad,persDomicilioCalle,persDomicilioNro,persDomicilioPiso,persDomicilioDepto,persDomicilioBarrio,persDomicilioReferencia,persDomicilioCodPostal,persDomicilioGeoRef,persFoto,persContactoEmail,persContactoTelefono,persContactoOtros,persLenguaFamiliar,persCredo,persPuebloOriginario,persDiscapacidades,persPrivacionDeLibertad,persInternacionHospitalaria,persAtencionesEspeciales,persBeneficiosYcompensaciones,persProgramasYproyectos,persGrupoSanguineo,persJubilacion,persRetiro,persAptitudPsicofisica, persAptitudPsicoFisicaDesde, persAptitudPsicoFisicaHasta,persFamiliares,persTitulos,persCapacitaciones,persAntecedentes,persFechaAlta,persFechaBaja,persFechaUltModif,persUsuarioAlta,persUsuarioUltModif,persUsuario): any {
  //     var ps  = [ ];

  //     var foods = { "persCu": persCu, "persDesc": persDesc, "persApellidos": persApellidos,"persNombres": persNombres,"persTipoDocumento": persTipoDocumento, "persDocumento": persDocumento, "persCuil": persCuil, "persFechaDeNacimiento": persFechaDeNacimiento, "persSexo": persSexo, "persNacionalidad": persNacionalidad, "persEstadoCivil": persEstadoCivil, "persLocalidadDeNacimiento": persLocalidadDeNacimiento, "persDomicilioAmbiente": persDomicilioAmbiente, "persDomicilioLocalidad": persDomicilioLocalidad, "persDomicilioCalle": persDomicilioCalle,"persDomicilioNro": persDomicilioNro , "persDomicilioPiso": persDomicilioPiso, "persDomicilioDepto": persDomicilioDepto, "persDomicilioBarrio": persDomicilioBarrio, "persDomicilioReferencia": persDomicilioReferencia, "persDomicilioCodPostal": persDomicilioCodPostal, "persDomicilioGeoRef": persDomicilioGeoRef, "persFoto": persFoto, "persContactoEmail": persContactoEmail, "persContactoTelefono": persContactoTelefono, "persContactoOtros": persContactoOtros, "persLenguaFamiliar" : persLenguaFamiliar, "persCredo": persCredo, "persPuebloOriginario": persPuebloOriginario, "persDiscapacidades": persDiscapacidades, "persPrivacionDeLibertad": persPrivacionDeLibertad, "persInternacionHospitalaria": persInternacionHospitalaria, "persAtencionesEspeciales": persAtencionesEspeciales,"persBeneficiosYcompensaciones": persBeneficiosYcompensaciones,"persProgramasYproyectos": persProgramasYproyectos ,"persGrupoSanguineo": persGrupoSanguineo ,"persJubilacion": persJubilacion ,"persRetiro": persRetiro,"persAptitudPsicofisica": persAptitudPsicofisica,"persAptitudPsicoFisicaDesde" : persAptitudPsicoFisicaDesde, "persAptitudPsicoFisicaHasta":persAptitudPsicoFisicaHasta ,"persFamiliares": persFamiliares,"persTitulos": persTitulos,"persCapacitaciones": persCapacitaciones,"persAntecedentes": persAntecedentes,"persFechaAlta": persFechaAlta ,"persFechaBaja": persFechaBaja,"persFechaUltModif": persFechaUltModif,"persUsuarioAlta": persUsuarioAlta,"persUsuarioUltModif": persUsuarioUltModif,"persUsuario": persUsuario};

  //     return this.http.post<any[]>(this.restItemsUrlPersonas+"/api/v1.0/Persona",foods )
  //     .pipe(map(data => data));
  //     }

      





