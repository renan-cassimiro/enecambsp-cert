import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiaEvento } from '../../models/DiaEvento';
import { DiaEventoService } from '../../services/dia-evento/dia-evento.service';

@Component({
  selector: 'app-cronograma',
  templateUrl: './cronograma.page.html',
  styleUrls: ['./cronograma.page.scss'],
})
export class CronogramaPage implements OnInit {

  diasEvento: DiaEvento[];
  
  constructor(private diaEventoService: DiaEventoService, private router: Router) {   
    this.diaEventoService.getAll()
        .then((result) => {
          this.diasEvento = result;
        });

    }

  ngOnInit() {
  }

  atividades(diaEvento: DiaEvento){
    this.router.navigate(['/atividades', diaEvento]);
  }

}
