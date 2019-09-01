import { Component, OnInit } from '@angular/core';
import { BarcodeScannerOptions, BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import { ParticipantesService, Participante } from '../../services/participantes/participantes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-participante',
  templateUrl: './cadastro-participante.page.html',
  styleUrls: ['./cadastro-participante.page.scss'],
})
export class CadastroParticipantePage implements OnInit {

  barcodeScannerOptions: BarcodeScannerOptions;
  participanteService: ParticipantesService;
  participante: Participante;

  constructor(private barcodeScanner: BarcodeScanner, participanteService: ParticipantesService,
    private route: ActivatedRoute, private router: Router) {
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
    this.participanteService = participanteService;
  }

  ngOnInit() {
    this.participante = new Participante();
    this.route.params.subscribe(params => {
      this.participante.id = params['id']; 
      this.participante.nome = params['nome'];
      this.participante.cpf = params['cpf'];
      this.participante.qrcode = params['qrcode'];
    });
  }

  cadastraParticipante(participante: Participante){
    this.participanteService.cadastraParticipante(this.participante);   
    this.router.navigate(['/listar-participantes']);
  }

  excluiParticipante(){
    this.participanteService.excluiParticipante(this.participante);   
    this.router.navigate(['/listar-participantes']);
  }

  scanCode() {
   this.barcodeScanner
      .scan()
      .then(barcodeData => {
        this.participante.qrcode = barcodeData.text;
      })
      .catch(err => {
        console.log("Error", err);
        this.participante.qrcode = "0000"
      });
  }
 

}
