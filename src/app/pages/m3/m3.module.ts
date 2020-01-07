import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { M3RoutingModule } from './m3-routing.module';
import { P1Component } from './p1/p1.component';
import { P2Component } from './p2/p2.component';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { SimpleLayoutComponent } from 'src/app/layouts/simple-layout/simple-layout.component';

@NgModule({
  declarations: [SimpleLayoutComponent, P1Component, P2Component],
  imports: [
    CommonModule,
    NgZorroAntdMobileModule,
    M3RoutingModule
  ]
})
export class M3Module { }
