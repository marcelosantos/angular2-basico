import { Injectable } from '@angular/core';

@Injectable()
export class TarefasService {

  getTarefas(){
    return ['Estudar Inglês', 'Estuda Ang2', 'Impl. Integração'];
  }
}
