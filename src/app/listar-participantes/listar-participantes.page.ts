import { Component, OnInit } from '@angular/core';
import { ParticipantesService, Participante } from '../../services/participantes/participantes.service';
import { Router } from '@angular/router';
import { AjudaPage } from '../ajuda/ajuda.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-listar-participantes',
  templateUrl: './listar-participantes.page.html',
  styleUrls: ['./listar-participantes.page.scss'],
})
export class ListarParticipantesPage implements OnInit {

  participantes: Participante[] ;

  constructor(private participantesService: ParticipantesService,
    private router: Router, private modalController: ModalController){
  }

  editaParticipante(participante: Participante){
    this.router.navigate(['/cadastro-participante', participante]);
  }

  ngOnInit() {
    this.participantesService.getAll()
      .then((result:Participante[]) => {
        this.participantes=result;
      });
  }

  async abreAjuda(){
    const modal = await this.modalController.create({
      component: AjudaPage,
      componentProps: {
        "subtitulo":  "Segue abaixo a lista com os dias do evento destacando-se o dia atual " + 
        "- quando as presenças devem ser registradas. <br> O controle pessoal de presença dos " +
        "dias anteriores podem ser consultadas, assim como as atividades que ocorrerão nos dias " +
        "posteriores.",
        "mensagem": "Hoje é 26/10/2019. <br>Estamos no 3º dia do VII ENECAmb."
      }
    });
 
    return await modal.present();
  }

}
