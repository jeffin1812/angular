import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Adicione esta linha
import { ModuloBRoutingModule } from './modulo-b-routing.module';
import { ComponentB } from './component-b/component-b.component';

@NgModule({
  declarations: [ComponentB],
  imports: [
    CommonModule,
    RouterModule, // Adicione esta linha
    ModuloBRoutingModule
  ]
})
export class ModuloBModule { }
