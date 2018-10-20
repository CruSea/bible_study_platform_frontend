import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./views/login/login.component";
// Import Containers
import {
  FullLayout,
  SimpleLayout
} from './containers';
import { RegisterComponent } from 'app/views/register/register.component';

export const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },

  {
    path:'register',
    component: RegisterComponent,
  },
  {
    path: '',
    component: SimpleLayout,
    data: {
      title: 'Login'
    },
    children: [
      {
        path: 'auth',
        loadChildren: './views/login/login.module#LoginModule'
      },
    ]
  },
  {
    path: 'dashboard',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayout,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },

    ]
  } 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
