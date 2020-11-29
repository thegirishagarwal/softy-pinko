import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { LayoutComponent } from './components';

const childRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('../modules/home/home.module').then(m => m.HomeModule)
  }
]

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: childRoutes
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
