import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule  } from "@angular/forms";


import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { ComponentsModule} from '../components/components.module';
 

 



@NgModule({
  declarations: [
    PagesComponent,
     DashboardComponent,
     ProgressComponent,
    Grafica1Component,
    
  ],
  exports : [
    PagesComponent,
   DashboardComponent,
   ProgressComponent,
   Grafica1Component,
    
   
  ],
  imports: [
    CommonModule,SharedModule,
    RouterModule,
    FormsModule,
    ComponentsModule 
    
  ]
})
export class PagesModule { }
