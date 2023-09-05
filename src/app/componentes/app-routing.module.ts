import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from '../componentes/login/login.module';
import { HomeModule } from '../componentes/home/home.module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import ('../componentes/home/home.module').then( m => HomeModule)

  },
  {
    path: 'logar', 
    loadChildren: () => import ('../componentes/login/login.module').then( m => LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
