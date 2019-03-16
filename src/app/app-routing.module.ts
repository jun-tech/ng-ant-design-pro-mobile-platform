import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'm1/p1' },
  {
    path: 'm1',
    loadChildren: './pages/m1/m1.module#M1Module',
  },
  {
    path: 'm2',
    loadChildren: './pages/m2/m2.module#M2Module',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
