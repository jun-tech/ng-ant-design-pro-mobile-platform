import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { M1RoutingModule } from './m1-routing.module';
import { P1Component } from './p1/p1.component';

@NgModule({
  declarations: [P1Component],
  imports: [
    CommonModule,
    M1RoutingModule
  ]
})
export class M1Module { }
