

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AutenticacaoService } from '../../services/autenticacao/autenticacao.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  constructor(
    private autenticacaoService: AutenticacaoService,
    private navCtrl: NavController
  ) {
  }

  ionViewWillEnter() {
    let isLoggedIn = this.autenticacaoService.getToken();
    if (isLoggedIn) {
      this.navCtrl.navigateRoot('/principal');
    }
  }

  ngOnInit() {
  }
}
