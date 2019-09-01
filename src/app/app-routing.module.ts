import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { AutenticacaoGuard } from '../guard/autenticacao.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'entrar', loadChildren: './entrar/entrar.module#EntrarPageModule' },
  { path: 'cadastrar', loadChildren: './cadastrar/cadastrar.module#CadastrarPageModule' },
  { path: 'cronograma', loadChildren: './cronograma/cronograma.module#CronogramaPageModule', 
    canActivate: [AutenticacaoGuard] },
  { path: 'atividades', loadChildren: './atividades/atividades.module#AtividadesPageModule', 
    canActivate: [AutenticacaoGuard] },
  { path: 'incluir-participante', 
    loadChildren: './incluir-participante/incluir-participante.module#IncluirParticipantePageModule', 
    canActivate: [AutenticacaoGuard] },
  { path: 'lista-presenca', loadChildren: './lista-presenca/lista-presenca.module#ListaPresencaPageModule', 
    canActivate: [AutenticacaoGuard] },
  { path: 'cadastro-participante', 
    loadChildren: './cadastro-participante/cadastro-participante.module#CadastroParticipantePageModule', 
    canActivate: [AutenticacaoGuard] },
  { path: 'listar-participantes', 
    loadChildren: './listar-participantes/listar-participantes.module#ListarParticipantesPageModule', 
    canActivate: [AutenticacaoGuard] },
  { path: 'principal', 
    loadChildren: './principal/principal.module#PrincipalPageModule', canActivate: [AutenticacaoGuard] },
=======

const routes: Routes = [
  { path: '', redirectTo: 'cronograma', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'cronograma', loadChildren: './cronograma/cronograma.module#CronogramaPageModule' },
  { path: 'atividades', loadChildren: './atividades/atividades.module#AtividadesPageModule' },
  { path: 'incluir-participante', loadChildren: './incluir-participante/incluir-participante.module#IncluirParticipantePageModule' },
>>>>>>> 92a9e83a622c5153cac55c274fff3e27f68456e5
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
