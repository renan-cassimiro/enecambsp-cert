import { Component, OnInit } from '@angular/core';
import {
  BarcodeScannerOptions,
  BarcodeScanner
} from "@ionic-native/barcode-scanner/ngx";
import { Route, ActivatedRoute } from '@angular/router';
import { AtividadesPage } from '../atividades/atividades.page';
import { Atividade, AtividadesService } from '../../services/atividades/atividades.service';
import { Participante, ParticipantesService } from '../../services/participantes/participantes.service';
import { Colaborador } from '../../models/colaborador';

@Component({
  selector: 'app-incluir-participante',
  templateUrl: './incluir-participante.page.html',
  styleUrls: ['./incluir-participante.page.scss'],
})
export class IncluirParticipantePage implements OnInit {
  
  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;
  atividade: Atividade;
  participante: Participante;
  colaborador: Colaborador;

  constructor(private barcodeScanner: BarcodeScanner, private route: ActivatedRoute,
    private participanteService: ParticipantesService, private atividadeService: AtividadesService) {
    //Options
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
  }

  exclui(){
    this.participante = undefined;
  }

  confirma(){
    this.colaborador = new Colaborador();
    this.colaborador.id = 1;
    this.atividadeService.registraPresenca(this.atividade, this.participante, this.colaborador);
    this.participante = undefined;
  }
 
  scanCode() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        this.participante = new Participante();
        this.participante.qrcode = barcodeData.text;
        this.participanteService.getParticipanteByQrCode(this.participante);
      })
      .catch(err => {
        
        this.participante = new Participante();
        this.participante.qrcode = "0000";
        this.participanteService.getParticipanteByQrCode(this.participante);
        console.log("Error", err);
      });
  }
 
  ngOnInit() {
    this.atividade = new Atividade();
    this.route.params.subscribe(params => {
      this.atividade.id = params['id']; 
      this.atividade.descricao = params['descricao'];
      this.atividade.hora = params['hora'];
      this.atividade.pacote = params['pacote'];
      this.atividade.tipo = params['tipoAtividade'];
      this.atividade.titulo = params['titulo'];
    });
  }

}
