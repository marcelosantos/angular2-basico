import { Component } from '@angular/core';

import { TarefasService } from './tarefas.service';

@Component({
  moduleId: module.id,
  selector: 'tarefas-lista',
  templateUrl: 'tarefas.component.html'
})
export class TarefasComponent {

  nomeProjeto = 'pendentes';

  tarefas: any;

  constructor(tarefasService: TarefasService){
    this.tarefas = tarefasService.getTarefas();
  }
}