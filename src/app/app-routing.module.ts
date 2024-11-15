import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'moduloA', loadChildren: () => import('./modulo-a/modulo-a.module').then(m => m.ModuloAModule) },
  { path: 'moduloB', loadChildren: () => import('./modulo-b/modulo-b.module').then(m => m.ModuloBModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
