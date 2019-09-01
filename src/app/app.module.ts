import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { FormsModule } from '@angular/forms';

<<<<<<< HEAD
import { IonicStorageModule } from '@ionic/storage';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DiaEventoService } from '../services/dia-evento/dia-evento.service';
import { ToastService } from '../services/toast/toast.service'
import { ParticipantesService } from '../services/participantes/participantes.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    FormsModule,
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
=======
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
>>>>>>> 92a9e83a622c5153cac55c274fff3e27f68456e5
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
<<<<<<< HEAD
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DatePipe,
    DiaEventoService,
    ToastService,
    ParticipantesService
=======
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
>>>>>>> 92a9e83a622c5153cac55c274fff3e27f68456e5
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
