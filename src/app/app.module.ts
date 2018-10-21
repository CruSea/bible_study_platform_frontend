import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

// Import containers
import {
  FullLayout,
  SimpleLayout
} from './containers';

const APP_CONTAINERS = [
  FullLayout,
  SimpleLayout
]

// Import components
import {
  AppAside,
  AppBreadcrumbs,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader
} from './components';

const APP_COMPONENTS = [
  AppAside,
  AppBreadcrumbs,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader
]

// Import directives
import {
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  SIDEBAR_TOGGLE_DIRECTIVES
} from './directives';

const APP_DIRECTIVES = [
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  SIDEBAR_TOGGLE_DIRECTIVES
]

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { LoginModule } from 'app/views/login/login.module';
import { LoginRoutingModule } from 'app/views/login/login-routing.module';
import { HttpService } from 'app/http.service';
import { AuthService } from 'app/auth.service';
import { RegisterModule } from 'app/views/register/register.module';
import { BibleStudyComponent } from './views/bible_study/bible-study.component';
import { CategoryComponent } from './views/category/category.component';
import { UserComponent } from './views/user/user.component';
import { SmsLogsComponent } from './views/sms-logs/sms-logs.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    FormsModule,
    ChartsModule,
    LoginModule,
    RegisterModule,
    LoginRoutingModule,
   
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES,
  
   
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  },  AuthService, HttpService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
