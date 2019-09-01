import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Participante } from '../participantes/participantes.service';
import { DiaEvento } from '../../models/DiaEvento';
import { Colaborador } from '../../models/Colaborador'

@Injectable({
  providedIn: 'root'
})
export class AtividadesService {

  private API_URL = "https://enecambsp-cert.herokuapp.com/"

  constructor(private http: HttpClient) { }

  public getAll(dia: string) {
    let atividades: Atividade[] = [];

    return new Promise((resolve, reject) => {
      let url = this.API_URL + "atividades?dia=" + dia;

      this.http.post(url, {})
        .subscribe((result: Atividade[]) => {
          resolve(result);
          console.log(result);
        },
          (error) => {
            reject(error);
          });
    });
  }

  public registraPresenca(atividade: Atividade, participante: Participante, colaborador: Colaborador) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + "registrar-presenca-participante?qrCodeParticipante=" + participante.qrcode +
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
}

export class Atividade {
  id: number;
  dia: DiaEvento;
  hora: string;
  tipo: string;
  convidados: string;
  descricao: string;
  titulo: string;
  pacote: string;
}
