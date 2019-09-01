import { Component, OnInit } from '@angular/core';
import { Colaborador } from '../../models/Colaborador';
import { AutenticacaoService } from '../../services/autenticacao/autenticacao.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  usuario: Colaborador;

  constructor(private autenticacaoService: AutenticacaoService) {
  }

  ngOnInit() {

  }
  
  ionViewWillEnter() {
    /*this.autenticacaoService.usuario().subscribe(
      usuario => {
        this.usuario = usuario;
      }
    );*/
  }

}
