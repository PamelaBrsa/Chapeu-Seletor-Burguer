import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { CardUserComponent } from './card-user/card-user.component';


@NgModule({
  declarations: [
    LoginComponent,
    FormLoginComponent,
    CardUserComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  exports: [
    LoginComponent
  ]
  
})
export class LoginModule { }
