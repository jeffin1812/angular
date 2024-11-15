import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentB } from './component-b/component-b.component';

const routes: Routes = [
  { path: 'rota2', component: ComponentB }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloBRoutingModule { }
