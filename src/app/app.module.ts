import { BrowserModule }  from '@angular/platform-browser'; //Bibliotecas do proprio Angular.
import { NgModule }       from '@angular/core';             //Bibliotecas do proprio Angular.
import { AppComponent }   from './app.component';
import { HelloComponent } from './hello/hello.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';   //Importando a tag <hello>.


/*
 2)Esse eh o modulo principal do projeto, que eh chamado pelo arquivo "main.ts". 
   Ai aqui eu digo quais sao os componentes do meu projeto.
*/ 
@NgModule({

  declarations: [
    AppComponent,
    HelloComponent,
    BemVindoComponent
  ],

  imports: [
    BrowserModule
  ],

  providers: [],
  bootstrap: [AppComponent]

})

export class AppModule {
}
