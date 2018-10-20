import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {HttpService} from "../../http.service";
import {AuthService} from "../../auth.service";
import { UserComponent } from 'app/views/user/user.component';
import { UserRoutingModule } from 'app/views/user/user-routing.module';
// import { RegisterComponent } from './register/register.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    UserRoutingModule
  ],
  declarations: [UserComponent
  ],
  providers: [ AuthService , HttpService ]
})
export class UserModule { }
