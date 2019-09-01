import { Component } from '@angular/core';

<<<<<<< HEAD
import { Platform, NavController, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AutenticacaoService } from '../services/autenticacao/autenticacao.service';
import { AutenticacaoGuard } from '../guard/autenticacao.guard';
=======
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
>>>>>>> 92a9e83a622c5153cac55c274fff3e27f68456e5

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
<<<<<<< HEAD

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private autenticacaoService: AutenticacaoService,
    private navCtrl: NavController,
    private toast: ToastController
=======
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
>>>>>>> 92a9e83a622c5153cac55c274fff3e27f68456e5
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
<<<<<<< HEAD
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
=======
      this.splashScreen.hide();
    });
  }
>>>>>>> 92a9e83a622c5153cac55c274fff3e27f68456e5
}
