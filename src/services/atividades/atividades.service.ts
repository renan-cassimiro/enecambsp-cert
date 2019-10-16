import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Participante } from '../participantes/participantes.service';
import { Atividade } from '../../models/Atividade';
import { Colaborador } from '../../models/Colaborador'
import { AmbienteService } from '../ambiente/ambiente.service';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AtividadesService {

  constructor(private storage: Storage, private http: HttpClient, private ambienteService: AmbienteService){
  }

  public registraPresenca(atividade: Atividade, participante: Participante, colaborador: Colaborador) {
    return new Promise((resolve, reject) => {
      let url = this.ambienteService.API_URL + "registrar-presenca-participante?qrCodeParticipante=" + participante.qrcode +
        "&idAtividade=" + atividade.id + "&idColaborador=" + colaborador.id;

      this.http.get(url)
        .subscribe((result: Atividade[]) => {
          resolve(result);
        },
          (error) => {
            reject(error);
          });
    });
  }

  public listaPresencaAtividade(atividade: Atividade, colaborador : Colaborador){
    let participante: Participante[] = [];

    return new Promise((resolve, reject) => {
      let url = this.ambienteService.API_URL + "listar-presencas";

      this.http.post(url, {atividade, colaborador})
        .subscribe((result: Participante[]) => {
          resolve(result);
          console.log(result);
        },
          (error) => {
            reject(error);
          });
    });
  }

  public getAll(dia: string) {
    let atividades: Atividade[] = [];

    return new Promise((resolve, reject) => {
      let url = this.ambienteService.API_URL + "atividades?dia=" + dia;

      this.http.post(url, {})
        .subscribe((result: Atividade[]) => {
          this.gravaAtividadesOffline(result);
          resolve(result);
        },
        (error) => {
          resolve(this.buscaAtividadesOffline(dia));  
        });
    });
  }

  private buscaAtividadesOffline(dia: String){
    let atividades: Atividade[] = [];

    this.storage
    .forEach((atividade: Atividade) => {
      if(dia == atividade.dia){
        atividades.push(atividade);
      }
    }) 
    .catch((error) => {
       return Promise.reject(error);
    });

    return atividades;
  }

  private gravaAtividadesOffline(atividades :  Atividade[]){
    
    atividades.forEach((atividade: Atividade) => {
      this.storage.get(atividade.dia+atividade.id)
        .then((atividadeOffline : Atividade) => {
          if(!atividadeOffline){
            this.storage.set(atividade.dia+atividade.id, atividade);
          }
      });
    });
  }
}


