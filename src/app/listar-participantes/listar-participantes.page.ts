import { Component, OnInit } from '@angular/core';
import { ParticipantesService, Participante } from '../../services/participantes/participantes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-participantes',
  templateUrl: './listar-participantes.page.html',
  styleUrls: ['./listar-participantes.page.scss'],
})
export class ListarParticipantesPage implements OnInit {

  participantes: Participante[] ;

  constructor(private participantesService: ParticipantesService,
    private router: Router) {
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

}
