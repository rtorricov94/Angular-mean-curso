import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { SirebarComponent } from './sirebar/sirebar.component';
import { HeaderComponent } from './header/header.component';
import { RouterLink, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
      
    BreadcrumsComponent,
    SirebarComponent,
    HeaderComponent

  ],
  exports : [
    BreadcrumsComponent,
    SirebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
