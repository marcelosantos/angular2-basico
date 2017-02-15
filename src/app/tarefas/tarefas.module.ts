import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarefasService } from './tarefas.service';
import { TarefasComponent } from './tarefas.component';
import { InputPropertiesComponent } from './input.properties.component'
import { OutputPropertiesComponent } from './output.properties.component'

@NgModule({
    imports: [ CommonModule ],
    declarations: [
        TarefasComponent,
        InputPropertiesComponent,
        OutputPropertiesComponent
    ],
    exports: [
        TarefasComponent,
        InputPropertiesComponent,
        OutputPropertiesComponent
    ],
    providers: [ TarefasService ]
})
export class TarefasModule { }
