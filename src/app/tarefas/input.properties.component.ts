import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'resultado',
  templateUrl: 'input.properties.component.html',
  //inputs: ['textoResultado:texto']
})
export class InputPropertiesComponent {

    @Input("texto")
    textoResultado : string = "";

    constructor(){ }

}
