import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customInit();
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor(services:SettingsService) { }

  ngOnInit(): void {
   customInit();

  }

}
