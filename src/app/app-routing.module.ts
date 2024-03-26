import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/users/users.module').then((m) => m.UsersModule)
  },
  {
    path: 'user/:id',
    loadChildren: () => import('./pages/details-user/details-user.module').then((m) => m.DetailsUserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
