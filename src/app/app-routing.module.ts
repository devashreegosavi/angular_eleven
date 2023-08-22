import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [] = [
  {
    path : '',
    component : WelcomeComponent
  },
  {
    path : 'about',
    //component : AboutComponent
    loadComponent : () => import('./about/about.component').then((mod) => mod.AboutComponent),
  },
  {
    path : 'dashboard',
    loadChildren: () =>
      import('./dashboard/routes').then(
        (mod) => mod.DASHBOARD_ROUTES
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
