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

    new Promise((resolve, reject)=>{
      let url = this.ambiente.API_URL+"cronograma";
      
      this.http.post(url, {})
        .subscribe((result:any) =>{
          resolve(result);
        },
        (error) => {
          this.toast.presentToast("A aplicação não está conectada a internet. Dados locais serão utilizados para continuar")
          console.log(error);
          reject(error);  

        });
    });   
    
    this.carregarCronograma();
    let diasEvento: DiaEvento[] = [];

    return this.storage
      .forEach((value: string, numeroOrdinal: string, iterationNumber: Number) => {
        let diaEvento = new DiaEvento();
        diaEvento.numeroOrdinal = numeroOrdinal;
        diaEvento.data = value;
        diasEvento.push(diaEvento);
      })
      .then(() => {
      return Promise.resolve(diasEvento);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }

  private carregarCronograma(){
    let diaEvento1 = new DiaEvento();
    diaEvento1.numeroOrdinal = "1º";
    diaEvento1.data = "23/10/2019";
    diaEvento1.nome = "PRIMEIRO";

    let diaEvento2 = new DiaEvento();
    diaEvento2.numeroOrdinal = "2º";
    diaEvento2.data = "24/10/2019";
    diaEvento2.nome = "SEGUNDO";

    let diaEvento3 = new DiaEvento();
    diaEvento3.numeroOrdinal = "3º";
    diaEvento3.data = "25/10/2019";
    diaEvento3.nome = "TERCEIRO";

    let diaEvento4 = new DiaEvento();
    diaEvento4.numeroOrdinal = "4º";
    diaEvento4.data = "26/10/2019";
    diaEvento4.nome = "QUARTO";


    let diaEvento5 = new DiaEvento();
    diaEvento5.numeroOrdinal = "5º";
    diaEvento5.data = "27/10/2019";
    diaEvento5.nome = "QUINTO";


    let diaEvento6 = new DiaEvento();
    diaEvento6.numeroOrdinal = "6º";
    diaEvento6.data = "28/10/2019";
    diaEvento6.nome = "SEXTO";

    let diaEvento7 = new DiaEvento();
    diaEvento7.numeroOrdinal = "7º";
    diaEvento7.data = "29/10/2019";
    diaEvento7.nome = "SETIMO";

    let diaEvento8 = new DiaEvento();
    diaEvento8.numeroOrdinal = "8º";
    diaEvento8.data = "30/10/2019";
    diaEvento8.nome = "OITAVO";

    this.storage.set("1", diaEvento1);
    this.storage.set("2", diaEvento2);
    this.storage.set("3", diaEvento3);
    this.storage.set("4", diaEvento4);
    this.storage.set("5", diaEvento5);
    this.storage.set("6", diaEvento6);
    this.storage.set("7", diaEvento7);
    this.storage.set("8", diaEvento8);
  }
}