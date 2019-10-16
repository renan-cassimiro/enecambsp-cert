import { Component, OnInit } from '@angular/core';
import { AtividadesService } from '../../services/atividades/atividades.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DiaEvento } from '../../models/DiaEvento';
import { ModalController } from '@ionic/angular';
import { AjudaPage } from '../ajuda/ajuda.page';
import { Atividade } from '../../models/Atividade';

@Component({
  selector: 'app-atividades',
  templateUrl: './atividades.page.html',
  styleUrls: ['./atividades.page.scss'],
})
export class AtividadesPage implements OnInit {

  atividades: Atividade [];
  diaEvento: DiaEvento;
  
  constructor(private atividadesService: AtividadesService, private route: ActivatedRoute, 
    private router: Router, private modalController: ModalController) {
    
  }

  ngOnInit() {
    this.diaEvento = new DiaEvento;
    this.route.params.subscribe(params => {
      this.diaEvento.data = params['data'];
      this.diaEvento.ordinal = params['ordinal'];

      this.atividadesService.getAll(params['nome'])
        .then((result:Atividade[]) => {
          this.atividades=result;
        });;
    });
  }

  async abreAjuda(){
    const modal = await this.modalController.create({
      component: AjudaPage,
      componentProps: {
        "subtitulo":  "Procure na lista abaixo pela atividade desejada para registrar a " +
        "presença dos participantes.",
        "mensagem": "Hoje é 26/10/2019. \\n Estamos no 3º dia do VII ENECAmb."
      }
    }); 
    return await modal.present();
  }

  incluiParticipante(atividade: Atividade){
    this.router.navigate(['/incluir-participante', atividade]);
  }

}
