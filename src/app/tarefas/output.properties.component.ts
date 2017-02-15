import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'contagem',
  templateUrl: 'output.properties.component.html',
})
export class OutputPropertiesComponent {

    @Input('contagem')
    resultadoContagem : number = 0;

    @Output('eventoMudouContagem')
    mudouContagem = new EventEmitter();

    constructor(){ }

    incrementa(){
        this.resultadoContagem++;
        this.mudouContagem.emit({ novaContagem: this.resultadoContagem });
    }

    decrementa(){
        this.resultadoContagem--;
        this.mudouContagem.emit({ novaContagem: this.resultadoContagem });
    }

}
