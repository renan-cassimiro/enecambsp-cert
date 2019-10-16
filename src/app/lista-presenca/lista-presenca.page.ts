import { Component, OnInit } from '@angular/core';
import { AtividadesService} from '../../services/atividades/atividades.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Participante } from '../../services/participantes/participantes.service';
import { Colaborador } from '../../models/Colaborador';
import { AjudaPage } from '../ajuda/ajuda.page';
import { ModalController } from '@ionic/angular';
import { Atividade } from '../../models/Atividade';

@Component({
  selector: 'app-lista-presenca',
  templateUrl: './lista-presenca.page.html',
  styleUrls: ['./lista-presenca.page.scss'],
})
export class ListaPresencaPage implements OnInit {

  atividade: Atividade;
  colaborador: Colaborador;
  participantes: Participante [];

  constructor(private atividadesService: AtividadesService, private route: ActivatedRoute, 
    private router: Router, private modalController: ModalController) {
    
  }

  ngOnInit() {
    this.atividade = new Atividade();
    this.colaborador = new Colaborador()
    this.colaborador.id = 1;

    this.route.params.subscribe(params => {
      this.atividade.id = params['id']; 
      this.atividadesService
        .listaPresencaAtividade(this.atividade, this.colaborador)
          .then((result:Participante[]) => {
            this.participantes=result;
        });;
    });
  }

  async abreAjuda(){
    const modal = await this.modalController.create({
      component: AjudaPage,
      componentProps: {
        "subtitulo":  "Esta lista mostra todos os participantes que foram registrados na atividade, " +
          "informando sua identificação (ID lido pelo leitor de QR code). \\n Além disso, o item ao lado " +
          "mostra se a presença do participante foi registrada na lista de presença online no Google Drive, "+
          "pois as inscrições realizadas sem internet ficam somente no seu celular.",
        "mensagem": "Para mandar a incrição do participante para a lista de presença online, clique no item "+
          "ao lado do registro do participante. \\n Para mandar a inscrição de todos os participantes, clique " +
          "em 'Sincronizar'. \\n Para ver a lista de presença online, clique no link 'Acessar Lista de Presença " +
          "Online'. \\n Todas estas funcionalidades dependem de acesso a internet."
      }
    });
 
    return await modal.present();
  }

}
