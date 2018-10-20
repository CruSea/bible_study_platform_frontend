import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpService} from "../../http.service";
import {AuthService} from "../../auth.service";
import { YearRoutingModule } from 'app/views/year/year-routing.module';
import { YearComponent } from 'app/views/year/year.component';
import { YearViewComponent } from './year-view.component';
// import { RegisterComponent } from './register/register.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    YearRoutingModule
  ],
  declarations: [YearComponent, YearViewComponent
  ],
  providers: [ AuthService , HttpService ]
})
export class YearModule { }
