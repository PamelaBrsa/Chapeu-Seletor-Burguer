import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from '../componentes/app-routing.module';
import { AppComponent } from './app.component';
import { LoginService } from '../services/login/login.service';
import { OptionsModule } from './options/options.module';
import { MenuModule } from './menu/menu.module';
import { ProductsComponent } from './edit/products/products.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OptionsModule,
    MenuModule,
    
  
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
