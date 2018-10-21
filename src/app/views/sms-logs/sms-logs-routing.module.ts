import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {SmsLogsComponent} from './sms-logs.component';


const routes: Routes = [
  {
    path: '',
    component: SmsLogsComponent,
    data: {
      title: 'sms Logs'
    }
  }
  
];

@NgModule({
  imports: [ CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class SmsLogsRoutingModule { }
