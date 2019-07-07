import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IncluirParticipantePage } from './incluir-participante.page';

const routes: Routes = [
  {
    path: '',
    component: IncluirParticipantePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IncluirParticipantePage]
})
export class IncluirParticipantePageModule {}
