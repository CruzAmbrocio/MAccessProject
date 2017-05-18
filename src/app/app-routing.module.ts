import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component'

const routes: Routes = [

  {
    path: 'main',
    component : MainComponent
  },

  {
    path: 'login',
    component : LoginComponent
  },
   // otherwise redirect to home
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
export const routing = RouterModule.forRoot(routes);