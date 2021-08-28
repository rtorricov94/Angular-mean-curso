import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SirebarService {
  public menuItems : any = [];
  
  constructor() { 
    this.menuItems = [
      {
        titulo : 'dashboard',
        icono : '',
        subMenu:[
          {titulo:'Main',url:''},
          {titulo:'Progress',url:'progress'},
          {titulo:'Grafica',url:'grafica1'},
          {titulo:'Promesas',url:'promesa'}
        ]
      }
    ];
  }
}
