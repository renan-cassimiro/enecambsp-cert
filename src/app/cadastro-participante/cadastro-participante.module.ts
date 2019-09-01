import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroParticipantePage } from './cadastro-participante.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroParticipantePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroParticipantePage]
})
export class CadastroParticipantePageModule {}
