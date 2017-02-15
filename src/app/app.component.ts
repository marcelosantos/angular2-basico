import { Component } from '@angular/core';

@Component({
  selector: 'meu-teste-basico',
  template: `
    <h1>Angular 2 {{name}}</h1>
    <input type="text" [(ngModel)]="name"/>
    <input type="text" on-keyup="onKeyUp($event)" #meuConteudoTexto/>
    <p>Conteúdo: {{ conteudoTexto }}</p>
    <p>Conteúdo: {{ meuConteudoTexto.value }}</p>
    <button class="waves-effect waves-light btn-large indigo" (click)="sayHello()">Adicionar Tarefa</button>
    <tarefas-lista></tarefas-lista>
  `,
})
export class AppComponent  {
    name = 'Básico';

    conteudoTexto : string = "";

    constructor(){
        console.log("show log" + this.name);
    }

    sayHello(){
        alert("Hello!!!!");
        console.log("clicado!" + this.name)
    }

    onKeyUp(event: KeyboardEvent){
        console.log(event);
        this.conteudoTexto = event.target.value;
    }
}
