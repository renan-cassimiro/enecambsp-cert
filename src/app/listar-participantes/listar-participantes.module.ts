import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListarParticipantesPage } from './listar-participantes.page';

const routes: Routes = [
  {
    path: '',
    component: ListarParticipantesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListarParticipantesPage]
})
export class ListarParticipantesPageModule {}
