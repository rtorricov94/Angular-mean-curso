import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
 
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';
 
 
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
 
 



@NgModule({
  declarations: [
    AppComponent,

    NotpagefoundComponent 
 
    
  ],
  imports: [
    BrowserModule,
    PagesModule ,

    AppRoutingModule,
    AuthModule 
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
