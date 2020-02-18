import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  //{ path: 'home', loadChildren: () => import('./paginas/login.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'crudusuarios/:id/:user/:type',
    loadChildren: () => import('./paginas/crudusuarios/crudusuarios.module').then( m => m.CrudusuariosPageModule)
  },
  {
    path: 'info-usuario/:id/:user/:type',
    loadChildren: () => import('./paginas/info-usuario/info-usuario.module').then( m => m.InfoUsuarioPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
