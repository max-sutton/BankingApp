import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { AccountinfoComponent } from './accountinfo/accountinfo.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { LandingComponent } from './landing/landing.component';
import { PersonalComponent } from './personal/personal.component';
import { BusinessComponent } from './business/business.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    AccountinfoComponent,
    CreateAccountComponent,
    CreateTransactionComponent,
    LandingComponent,
    PersonalComponent,
    BusinessComponent,
  ],
  imports: [
    AccordionModule.forRoot(),
    TabsModule.forRoot(),
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders, {provide: LocationStrategy, useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
