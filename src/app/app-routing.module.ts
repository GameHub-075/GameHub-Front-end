import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'Login'
  },
  {
    path: 'Home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'Login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'Erro',
    loadChildren: () => import('./modules/error/error.module').then(m => m.ErrorModule)
  },
  {
    path: 'NotFound',
    loadChildren: () => import('./modules/notFound/notFound.module').then(m => m.NotFoundModule)
  }
];


@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
