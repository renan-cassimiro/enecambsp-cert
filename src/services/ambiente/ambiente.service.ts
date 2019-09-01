import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AmbienteService {

  API_URL = "https://enecambsp-cert.herokuapp.com/";

  constructor() { }
}
