import { Component, OnInit } from '@angular/core';
import { SirebarService } from 'src/app/services/sirebar.service';

@Component({
  selector: 'app-sirebar',
  templateUrl: './sirebar.component.html',
  styles: [
  ]
})
export class SirebarComponent implements OnInit {

  public menuItems : any =[];
  constructor(private service: SirebarService) { }

  ngOnInit(): void {
    this.menuItems = this.service.menuItems;
     
  }

}
