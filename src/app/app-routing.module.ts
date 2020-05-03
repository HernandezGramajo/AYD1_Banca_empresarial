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
  {
    path: 'staff/:id/:user/:type',
    loadChildren: () => import('./paginas/staff/staff.module').then( m => m.StaffPageModule)
  },
  {
    path: 'reportes-usuario/:id/:user/:type',
    loadChildren: () => import('./paginas/reportes-usuario/reportes-usuario.module').then( m => m.ReportesUsuarioPageModule)
  },
  {
    path: 'beneficios-staff/:id/:user/:type',
    loadChildren: () => import('./paginas/beneficios-staff/beneficios-staff.module').then( m => m.BeneficiosStaffPageModule)
  },
  {
    path: 'pago-nomina/:id/:user/:type',
    loadChildren: () => import('./paginas/pago-nomina/pago-nomina.module').then( m => m.PagoNominaPageModule)
  },
  {
    path: 'crudbeneficios-empresa/:id/:user/:type',
    loadChildren: () => import('./paginas/crudbeneficios-empresa/crudbeneficios-empresa.module').then( m => m.CrudbeneficiosEmpresaPageModule)
  },
  {
    path: 'popover',
    loadChildren: () => import('./paginas/popover/popover.module').then( m => m.PopoverPageModule)
  },
  {
    path: 'consulta-pagos-empresa/:id/:user/:type',
    loadChildren: () => import('./paginas/consulta-pagos-empresa/consulta-pagos-empresa.module').then( m => m.ConsultaPagosEmpresaPageModule)
  },
  {
    path: 'log-cambios/:id/:user/:type',
    loadChildren: () => import('./paginas/log-cambios/log-cambios.module').then( m => m.LogCambiosPageModule)
  },






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

