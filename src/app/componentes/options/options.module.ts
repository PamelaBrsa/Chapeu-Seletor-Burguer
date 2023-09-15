import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptionsRoutingModule } from './options-routing.module';
import { GarconeteComponent } from './garconete/garconete.component';
import { ChefComponent } from './chef/chef.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    GarconeteComponent,
    ChefComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    OptionsRoutingModule,
   
  ]
})
export class OptionsModule { }
