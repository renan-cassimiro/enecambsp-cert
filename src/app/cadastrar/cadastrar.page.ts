import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Colaborador } from '../../models/Colaborador';
import { NgForm } from '@angular/forms';
import { AutenticacaoService } from '../../services/autenticacao/autenticacao.service';
import { ToastService } from '../../services/toast/toast.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {

  colaborador: Colaborador;

  constructor(private autenticacaoService: AutenticacaoService, private navCtrl: NavController,
    private toastService: ToastService) { }

  ngOnInit() {
    this.colaborador = new Colaborador();
  }

  cadastra(form: NgForm) {
    this.autenticacaoService.registra(form.value.cpf, form.value.senha).subscribe(
      data => {
        this.autenticacaoService.entra(form.value.cpf, form.value.password).subscribe(
          data => {
          },
          error => {
            console.log(error);
          },
          () => {
            this.navCtrl.navigateRoot('/principal');
          }
        );
        this.toastService.presentToast(data['message']);
      },
      error => {
        console.log(error);
      },
      () => {

      }
    );
  }

}
