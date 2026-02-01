import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'tipo',
    loadChildren: () => import('./pages/tipo/tipo.module').then( m => m.TipoPageModule)
  },
  {
    path: 'add-tipo',
    loadChildren: () => import('./pages/add-tipo/add-tipo.module').then( m => m.AddTipoPageModule)
  },
  {
    path: 'tarefa',
    loadChildren: () => import('./pages/tarefa/tarefa.module').then( m => m.TarefaPageModule)
  },
  {
    path: 'add-tarefa',
    loadChildren: () => import('./pages/add-tarefa/add-tarefa.module').then( m => m.AddTarefaPageModule)
  },
  {
    path: 'add-tipo/:id',
    loadChildren: () => import('./pages/add-tipo/add-tipo.module').then( m => m.AddTipoPageModule)
  },
  {
    path: 'add-tarefa/:id',
    loadChildren: () => import('./pages/add-tarefa/add-tarefa.module').then( m => m.AddTarefaPageModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./pages/usuario/usuario.module').then( m => m.UsuarioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
