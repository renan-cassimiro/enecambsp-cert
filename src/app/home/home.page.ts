

<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AutenticacaoService } from '../../services/autenticacao/autenticacao.service'
=======
import { Component } from '@angular/core';
>>>>>>> 92a9e83a622c5153cac55c274fff3e27f68456e5

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
<<<<<<< HEAD

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
=======
export class HomePage {

  constructor() {}

>>>>>>> 92a9e83a622c5153cac55c274fff3e27f68456e5
}
