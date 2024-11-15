import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentA } from './component-a/component-a.component';

const routes: Routes = [
  { path: 'rota1', component: ComponentA }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloARoutingModule { }
