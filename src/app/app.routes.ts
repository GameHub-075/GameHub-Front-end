import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'Home'
    },
    {
        path: 'Home',
        loadChildren: () => import('./modules/home/home-routing.module').then(m => m.HomeRoutingModule)
    },
    {
        path: 'Login',
        loadChildren: () => import('./modules/login/login-routing.module').then(m => m.LoginRoutingModule)
    },
    {
        path: 'NotFound',
        loadChildren: () => import('./modules/notFound/notFound-routing.module').then(m => m.NotFoundRoutingModule)
    }
];
