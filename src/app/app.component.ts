import { Component } from '@angular/core';

@Component({
  selector: 'meu-teste-basico',
  template: `
    <h1>Angular 2 {{name}}</h1>
    <input type="text" [(ngModel)]="name"/>
    <input type="text" [(ngModel)]="name"/>
    <button (click)="sayHello()">Clique Me</button>
  `,
})
export class AppComponent  {
    name = 'Básico';

    constructor(){
        console.log("show log" + this.name);
    }

    sayHello(){
        console.log("clicado!" + this.name)
    }
}
