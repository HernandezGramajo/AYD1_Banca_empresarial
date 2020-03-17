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
    path: 'pago_nomina/:id/:user/:type',
    loadChildren: () => import('./paginas/pago-nomina/pago-nomina.module').then( m => m.PagoNominaPageModule)
  },
  
  {
    path: 'info-usuario/:id/:user/:type',
    loadChildren: () => import('./paginas/info-usuario/info-usuario.module').then( m => m.InfoUsuarioPageModule)
  },
  {
    path: 'staff/:id/:user/:type',
    loadChildren: () => import('./paginas/staff/staff.module').then( m => m.StaffPageModule)
  },
  {

    path: 'reportes-usuario/:id/:user/:type',
    loadChildren: () => import('./paginas/reportes-usuario/reportes-usuario.module').then( m => m.ReportesUsuarioPageModule)
  },
 {
    path: 'consulta-pagos-empresa/:id/:user/:type',
    loadChildren: () => import('./paginas/consulta-pagos-empresa/consulta-pagos-empresa.module').then( m => m.ConsultaPagosEmpresaPageModule)
  },
  {
    path: 'pago-nomina/:id/:user/:type',
    loadChildren: () => import('./paginas/pago-nomina/pago-nomina.module').then( m => m.PagoNominaPageModule)
  },
  {
    path: 'sol-prestamo/:id/:user/:type',
    loadChildren: () => import('./paginas/sol-prestamo/sol-prestamo.module').then( m => m.SolPrestamoPageModule)
  },
  {
    path: 'seguimiento-prestamos/:id/:user/:type',
    loadChildren: () => import('./paginas/seguimiento-prestamos/seguimiento-prestamos.module').then( m => m.SeguimientoPrestamosPageModule)
  },


  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

