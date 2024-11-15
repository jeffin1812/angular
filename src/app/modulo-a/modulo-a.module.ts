import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Adicione esta linha
import { ModuloARoutingModule } from './modulo-a-routing.module';
import { ComponentA } from './component-a/component-a.component';

@NgModule({
  declarations: [ComponentA],
  imports: [
    CommonModule,
    RouterModule, // Adicione esta linha
    ModuloARoutingModule
  ]
})
export class ModuloAModule { }
