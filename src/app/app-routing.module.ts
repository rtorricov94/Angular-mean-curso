import { NgModule } from '@angular/core';
 import {RouterModule, Routes} from '@angular/router';
 
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';
import { PagesRoutingModule } from './pages/rounting-pages';
 import { authRoutingModule } from './auth/rounting-auth';

 const routes : Routes =[

  
  {path:'', redirectTo:'/dashboard',pathMatch : 'full'},
  {path:'**', component : NotpagefoundComponent}
 ];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    authRoutingModule
  ],
  exports :[RouterModule]
})
export class AppRoutingModule { }
