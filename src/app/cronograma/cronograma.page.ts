import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiaEvento } from '../../models/DiaEvento';
import { DiaEventoService } from '../../services/dia-evento/dia-evento.service';
import { AjudaPage } from '../ajuda/ajuda.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cronograma',
  templateUrl: './cronograma.page.html',
  styleUrls: ['./cronograma.page.scss'],
})
export class CronogramaPage implements OnInit {

  diasEvento: DiaEvento[];
  
  constructor(private diaEventoService: DiaEventoService, private router: Router, 
    private modalController: ModalController) {   
      this.diaEventoService.getAll()
          .then((result:DiaEvento[]) => {
            this.diasEvento = result;
          });
  }

  ngOnInit() {
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

  atividades(diaEvento: DiaEvento){
    this.router.navigate(['/atividades', diaEvento]);
  }

}
