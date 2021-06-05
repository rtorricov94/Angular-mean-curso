import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { SirebarComponent } from './sirebar/sirebar.component';
import { HeaderComponent } from './header/header.component';



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
    CommonModule
  ]
})
export class SharedModule { }
