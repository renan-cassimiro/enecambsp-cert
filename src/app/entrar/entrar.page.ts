import { Component, OnInit } from '@angular/core';
import { Colaborador } from '../../models/Colaborador';
import { NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { AutenticacaoService } from '../../services/autenticacao/autenticacao.service';
import { ToastService } from '../../services/toast/toast.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.page.html',
  styleUrls: ['./entrar.page.scss'],
})
export class EntrarPage implements OnInit {

  colaborador: Colaborador;

  constructor(private autenticacaoService: AutenticacaoService, private toastService: ToastService,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.colaborador = new Colaborador();
  }

  entra(form: NgForm) {
    this.autenticacaoService.entra(form.value.email, form.value.password).subscribe(
      data => {
        this.toastService.presentToast("Logged In");
      },
      error => {
        console.log(error);
      },
      () => {
        this.navCtrl.navigateRoot('/principal');
      }
    );
  }

}
