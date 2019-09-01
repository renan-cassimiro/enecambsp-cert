import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { DiaEvento } from '../../models/DiaEvento';
import { DiaEventoService } from '../../services/dia-evento/dia-evento.service';
=======
>>>>>>> 92a9e83a622c5153cac55c274fff3e27f68456e5

@Component({
  selector: 'app-cronograma',
  templateUrl: './cronograma.page.html',
  styleUrls: ['./cronograma.page.scss'],
})
export class CronogramaPage implements OnInit {

<<<<<<< HEAD
  diasEvento: DiaEvento[];
  
  constructor(private diaEventoService: DiaEventoService, private router: Router) {   
    this.diaEventoService.getAll()
        .then((result) => {
          this.diasEvento = result;
        });

    }
=======
  constructor() { }
>>>>>>> 92a9e83a622c5153cac55c274fff3e27f68456e5

  ngOnInit() {
  }

<<<<<<< HEAD
  atividades(diaEvento: DiaEvento){
    this.router.navigate(['/atividades', diaEvento]);
  }

=======
>>>>>>> 92a9e83a622c5153cac55c274fff3e27f68456e5
}
