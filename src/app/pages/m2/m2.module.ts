import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { M2RoutingModule } from './m2-routing.module';
import { P2Component } from './p2/p2.component';

@NgModule({
  declarations: [P2Component],
  imports: [
    CommonModule,
    M2RoutingModule
  ]
})
export class M2Module { }
