import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

import { TarefasModule } from './tarefas/tarefas.module';

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,
      TarefasModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
