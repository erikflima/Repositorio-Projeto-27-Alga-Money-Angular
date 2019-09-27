import { Component } from '@angular/core';


/*
  Aqui eu defino:
   - Tags que posso usar nas paginas html. Que sao os "selectors".
   - Codigo html das tags. Que sao os "templateUrl".
   - CSS do codigo html das tags. Que sao os "styleUrls".x
*/
@Component({
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls:   ['./app.component.css']
})

export class AppComponent {

   //Criando variaveis globais
  nome            = 'Erik Lima';
  dataAniversario = new Date(1990, 3, 19);
  preco           = 12855.32;
  troco           = 0.57392;


    //Metodo
    teste(){

      console.log( "Test");
    }


}
