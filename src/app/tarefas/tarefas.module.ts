import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarefasService } from './tarefas.service';
import { TarefasComponent } from './tarefas.component';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ TarefasComponent ],
    exports: [ TarefasComponent ],
    providers: [TarefasService]
})
export class TarefasModule { }