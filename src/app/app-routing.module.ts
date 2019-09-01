import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
