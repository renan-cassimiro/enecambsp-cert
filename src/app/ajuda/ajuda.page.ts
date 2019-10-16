import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-ajuda',
  templateUrl: './ajuda.page.html',
  styleUrls: ['./ajuda.page.scss'],
})
export class AjudaPage implements OnInit {

  subtitulo: string;
  mensagem: string;
 
  constructor(private modalController: ModalController, private navParams: NavParams) {
  }
 
  ngOnInit() {
    console.table(this.navParams);
    this.subtitulo = this.navParams.data.subtitulo;
    this.mensagem = this.navParams.data.mensagem;
  }
 
  async closeModal() {
    const onClosedData: string = "Salve!";
    await this.modalController.dismiss(onClosedData);
  }

}
