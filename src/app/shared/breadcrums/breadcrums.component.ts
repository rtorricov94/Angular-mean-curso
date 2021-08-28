import { Component  } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
 
@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styles: [
  ]
})
export class BreadcrumsComponent   {
public titulo : string;
public Argumento$ : Subscription;
  constructor(private router: Router) { 
      this.Argumento$= this.getArgumentos().subscribe(({titulo}) => {
      this.titulo = titulo;
      document.title = `AdminPro- ${this.titulo}`;
    });
  }
    
 getArgumentos(){
    return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event : ActivationEnd) => event.snapshot.firstChild===null ),
      map((event : ActivationEnd)=> event.snapshot.data)
    );
 }
}
