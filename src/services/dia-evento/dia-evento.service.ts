import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ToastService } from '../toast/toast.service';
import { DiaEvento } from '../../models/DiaEvento';
import { AmbienteService } from '../../services/ambiente/ambiente.service';

@Injectable({
  providedIn: 'root'
})

export class DiaEventoService {

  constructor(private storage: Storage, private http: HttpClient, private toast: ToastService,
    private ambiente: AmbienteService) { 

  }

  public getAll() {

   return new Promise((resolve, reject)=>{
      let url = this.ambiente.API_URL+"cronograma";
      
      this.http.post(url, {})
        .subscribe((result:DiaEvento[]) =>{
          this.gravaCronogramaOffline(result);
          resolve(result);
        },
        (error) => {
         resolve(this.buscaCronogramaOffline());  
        });
    });   
    
  }

  private buscaCronogramaOffline(){
    let cronograma: DiaEvento[] = [];

    this.storage
    .forEach((diaEvento: DiaEvento) => {
      cronograma.push(diaEvento);
    }) 
    .catch((error) => {
       return Promise.reject(error);
    });

    return cronograma;
  }

  private gravaCronogramaOffline(cronograma :  DiaEvento[]){
    
    cronograma.forEach((diaEvento: DiaEvento) => {
      this.storage.get(diaEvento.nome)
        .then((diaEventoOffline : DiaEvento) => {
          if(!diaEventoOffline){
            this.storage.set(diaEvento.nome, diaEvento);
          }
      });
    });
  }
}