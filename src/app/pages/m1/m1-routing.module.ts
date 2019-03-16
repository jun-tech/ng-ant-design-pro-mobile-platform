import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { P1Component } from './p1/p1.component';

const routes: Routes = [
  { path: 'p1', component: P1Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class M1RoutingModule { }
