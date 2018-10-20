import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {HttpService} from "../../http.service";
import {AuthService} from "../../auth.service";
import { RegisterComponent } from 'app/views/register/register.component';
import { SmsLogsComponent} from './sms-logs.component';
import { SmsLogsRoutingModule } from 'app/views/sms-logs/sms-logs-routing.module';

// import { RegisterComponent } from './register/register.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SmsLogsRoutingModule
  ],
  declarations: [SmsLogsComponent
  ],
  providers: [ AuthService , HttpService ]
})
export class SmsLogsModule { }
