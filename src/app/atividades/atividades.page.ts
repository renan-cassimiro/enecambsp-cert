import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { AtividadesService, Atividade } from '../../services/atividades/atividades.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DiaEvento } from '../../models/DiaEvento';
=======
>>>>>>> 92a9e83a622c5153cac55c274fff3e27f68456e5

@Component({
  selector: 'app-atividades',
  templateUrl: './atividades.page.html',
  styleUrls: ['./atividades.page.scss'],
})
export class AtividadesPage implements OnInit {

<<<<<<< HEAD
  atividades: Atividade [];
  diaEvento: DiaEvento;
  
  constructor(private atividadesService: AtividadesService, private route: ActivatedRoute, 
    private router: Router) {
    
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.atividadesService.getAll(params['nome'])
        .then((result:Atividade[]) => {
          this.atividades=result;
        });;
    });
  }

  incluiParticipante(atividade: Atividade){
    this.router.navigate(['/incluir-participante', atividade]);
=======
  constructor() { }

  ngOnInit() {
>>>>>>> 92a9e83a622c5153cac55c274fff3e27f68456e5
  }

}
