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
      {
        path: 'sms-logs',
        loadChildren: './views/sms-logs/sms-logs.module#SmsLogsModule'
      },
      {
        path: 'bs',
        loadChildren: './views/bible_study/bible_study.module#BibleStudyModule'
      },
      {
        path: 'year',
        loadChildren: './views/year/year.module#YearModule'
      },
      {
        path: 'profile',
        loadChildren: './views/user/user.module#UserModule'
      },
      {
        path: 'category',
        loadChildren: './views/category/category.module#CategoryModule'
      },
      {
        path: 'user',
        loadChildren: './views/user/user.module#UserModule'
      },
      
    ]
    },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
