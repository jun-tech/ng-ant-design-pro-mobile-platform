import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { P1Component } from './p1/p1.component';
import { P2Component } from './p2/p2.component';
import { MineComponent } from './mine/mine.component';
import { MatchComponent } from './match/match.component';
import { SimpleLayoutComponent } from 'src/app/layouts/simple-layout/simple-layout.component';

const routes: Routes = [{
  path: '',
  component: SimpleLayoutComponent,
  children: [{
    path: 'p1',
    component: P1Component
  }, {
    path: 'p2',
    component: P2Component
  }, {
    path: 'mine',
    component: MineComponent
  }, {
    path: 'match',
    component: MatchComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class M3RoutingModule { }
