import { Component } from '@angular/core';

import { Platform, NavController, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AutenticacaoService } from '../services/autenticacao/autenticacao.service';
import { AutenticacaoGuard } from '../guard/autenticacao.guard';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private autenticacaoService: AutenticacaoService,
    private navCtrl: NavController,
    private toast: ToastController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.autenticacaoService.getToken();
      
      setTimeout(() => {
        this.splashScreen.hide();
      }, 1000);
    });
  }

  sai(){
    this.autenticacaoService.sai().subscribe(
      data => {
        this.toast.create(data['message']);
      },
      error => {
        console.log(error);
      },
      () => {
        this.navCtrl.navigateRoot('home');
      }
    );
  }
}
