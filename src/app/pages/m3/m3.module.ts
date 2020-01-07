import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { M3RoutingModule } from './m3-routing.module';
import { M3Component } from './m3.component';
import { P1Component } from './p1/p1.component';
import { P2Component } from './p2/p2.component';
import { MineComponent } from './mine/mine.component';
import { MatchComponent } from './match/match.component';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { SimpleLayoutComponent } from 'src/app/layouts/simple-layout/simple-layout.component';

@NgModule({
  declarations: [M3Component, SimpleLayoutComponent, P1Component, P2Component, MineComponent, MatchComponent],
  imports: [
    CommonModule,
    NgZorroAntdMobileModule,
    M3RoutingModule
  ]
})
export class M3Module { }
