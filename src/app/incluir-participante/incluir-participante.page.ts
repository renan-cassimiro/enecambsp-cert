import { Component, OnInit } from '@angular/core';
import {
  BarcodeScannerOptions,
  BarcodeScanner
} from "@ionic-native/barcode-scanner/ngx";
<<<<<<< HEAD
import { Route, ActivatedRoute } from '@angular/router';
import { AtividadesPage } from '../atividades/atividades.page';
import { Atividade, AtividadesService } from '../../services/atividades/atividades.service';
import { Participante, ParticipantesService } from '../../services/participantes/participantes.service';
import { Colaborador } from '../../models/colaborador';
=======
 
>>>>>>> 92a9e83a622c5153cac55c274fff3e27f68456e5

@Component({
  selector: 'app-incluir-participante',
  templateUrl: './incluir-participante.page.html',
  styleUrls: ['./incluir-participante.page.scss'],
})
export class IncluirParticipantePage implements OnInit {
  
<<<<<<< HEAD
  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;
  atividade: Atividade;
  participante: Participante;
  colaborador: Colaborador;

  constructor(private barcodeScanner: BarcodeScanner, private route: ActivatedRoute,
    private participanteService: ParticipantesService, private atividadeService: AtividadesService) {
=======
  encodeData: any;
  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;
 
  constructor(private barcodeScanner: BarcodeScanner) {
    this.encodeData = "https://www.FreakyJolly.com";
>>>>>>> 92a9e83a622c5153cac55c274fff3e27f68456e5
    //Options
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
  }
<<<<<<< HEAD

  exclui(){
    this.participante = undefined;
  }

  confirma(){
    this.colaborador = new Colaborador();
    this.colaborador.id = 1;
    this.atividadeService.registraPresenca(this.atividade, this.participante, this.colaborador);
    this.participante = undefined;
  }
=======
>>>>>>> 92a9e83a622c5153cac55c274fff3e27f68456e5
 
  scanCode() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
<<<<<<< HEAD
        this.participante = new Participante();
        this.participante.qrcode = barcodeData.text;
        this.participanteService.getParticipanteByQrCode(this.participante);
      })
      .catch(err => {
        
        this.participante = new Participante();
        this.participante.qrcode = "0000";
        this.participanteService.getParticipanteByQrCode(this.participante);
=======
        alert("Barcode data " + JSON.stringify(barcodeData));
        this.scannedData = barcodeData;
      })
      .catch(err => {
>>>>>>> 92a9e83a622c5153cac55c274fff3e27f68456e5
        console.log("Error", err);
      });
  }
 
<<<<<<< HEAD
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
=======
  encodedText() {
    this.barcodeScanner
      .encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeData)
      .then(
        encodedData => {
          console.log(encodedData);
          this.encodeData = encodedData;
        },
        err => {
          console.log("Error occured : " + err);
        }
      );
  }

  ngOnInit() {
  }

}
>>>>>>> 92a9e83a622c5153cac55c274fff3e27f68456e5
