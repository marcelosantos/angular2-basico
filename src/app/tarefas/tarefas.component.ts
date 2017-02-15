import { Component } from '@angular/core';

import { TarefasService } from './tarefas.service';
import { InputPropertiesComponent } from './input.properties.component';
import { OutputPropertiesComponent } from './output.properties.component';

@Component({
  moduleId: module.id,
  selector: 'tarefas-lista',
  templateUrl: 'tarefas.component.html',
  directives: [ InputPropertiesComponent, OutputPropertiesComponent ]
})
export class TarefasComponent {

  nomeProjeto = 'pendentes';

  textoResultado : string = "Consegui realizar as tarefas! YESSSSS";

  resultadoContagem : number = 0;

  imgSrc = 'http://lorempixel.com/180/180';

  tarefas: any;

  constructor(tarefasService: TarefasService){
    this.tarefas = tarefasService.getTarefas();
  }

  onHouveMudanca(event){
      console.log(event);
  }

}
