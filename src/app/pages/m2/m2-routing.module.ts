import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { P2Component } from './p2/p2.component';

const routes: Routes = [{
  path: 'p2', component: P2Component
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class M2RoutingModule { }
