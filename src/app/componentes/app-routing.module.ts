import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from '../componentes/login/login.module';
import { OptionsModule } from './options/options.module';
import { MenuModule } from './menu/menu.module';
import { EditModule } from './edit/edit.module';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../componentes/login/login.module').then(m => LoginModule)
  },
  {
    path: 'options',
    loadChildren: () => import('../componentes/options/options.module').then(m => OptionsModule)

  },
  {
    path: 'menu',
    loadChildren: () => import('../componentes/menu/menu.module').then(m => MenuModule)
  },
  {
  path: 'products',
    loadChildren: () => import('../componentes/edit/edit.module').then(m => EditModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
