import { Injectable } from '@angular/core';
import { Atividade } from '../atividades/atividades.service';
import { HttpClient } from '@angular/common/http';
import { ToastService } from '../toast/toast.service';

@Injectable({
  providedIn: 'root'
})
export class ParticipantesService {

  private API_URL = "https://enecambsp-cert.herokuapp.com/"

  constructor(private http: HttpClient, private toast: ToastService) { }

  public getAll() {
    let participantes: Participante[] = [];

    return new Promise((resolve, reject)=>{
      let url = this.API_URL+"participantes";
      
      this.http.post(url, Participante)
        .subscribe((result:Participante[]) => {
          resolve(result);
        },
        (error) => {
          this.toast.presentToast("A aplicação não está conectada a internet. Dados locais serão utilizados para continuar");
          reject(error);  
        });
    });
  }

  public getParticipanteByQrCode(participante: Participante){
    let url = this.API_URL+"buscar-participante-qrcode";
    return new Promise((resolve, reject)=>{
       this.http.post(url, participante)
        .subscribe((result:Participante) =>{
          resolve(result);
          participante.nome = result.nome;
          participante.cpf = result.cpf;
          participante.id = result.id;
          console.log(result);
        },
        (error) => {
          this.toast.presentToast("Usuário não encontrado!")
          reject(error);  
      });
    });
  }

  public cadastraParticipante(participante: Participante){
    new Promise((resolve, reject)=>{
      let url = this.API_URL+"cadastrar-participante";

      this.http.post(url, participante)
        .subscribe((result:any) =>{
          resolve(result);
          this.toast.presentToast("Usuário Cadastrado com Sucesso!")
        },
        (error) => {
          reject(error);  
        });
    });
  }

  public excluiParticipante(participante: Participante){
    new Promise((resolve, reject)=>{
      let url = this.API_URL+"excluir-participante";
      
      this.http.post(url, participante)
        .subscribe((result:any) =>{
          this.toast.presentToast("Usuário Excluído com Sucesso!")
          resolve(result);
        },
        (error) => {
          reject(error);  
        });
    });
  }

}

export class Participante{
  id: number;
  nome: string;
  cpf: string;
  qrcode: string;
}
