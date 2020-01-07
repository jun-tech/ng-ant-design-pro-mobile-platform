import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'm3/p1' },
  {
    path: 'm1',
    loadChildren: () => import('./pages/m1/m1.module').then(m => m.M1Module),
  },
  {
    path: 'm2',
    loadChildren: () => import('./pages/m2/m2.module').then(m => m.M2Module),
  },
  {
    path: 'm3',
    loadChildren: () => import('./pages/m3/m3.module').then(m => m.M3Module),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
