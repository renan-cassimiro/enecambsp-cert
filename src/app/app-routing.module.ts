import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'cronograma', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'cronograma', loadChildren: './cronograma/cronograma.module#CronogramaPageModule' },
  { path: 'atividades', loadChildren: './atividades/atividades.module#AtividadesPageModule' },
  { path: 'incluir-participante', loadChildren: './incluir-participante/incluir-participante.module#IncluirParticipantePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
