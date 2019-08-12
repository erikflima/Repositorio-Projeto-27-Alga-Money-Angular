import { Component } from '@angular/core';

/*
  Aqui eu defino:
   - Tags que posso usar nas paginas html. Que sao os "selectors".
   - Codigo html das tags. Que sao os "templateUrl".
   - CSS do codigo html das tags. Que sao os "styleUrls".x
*/
@Component({

    selector:    'hello',
    templateUrl: './hello.component.html',
    styleUrls: [ './hello.component.css' ]
  
  })


export class HelloComponent {

    //Criando uma variavel.
    nome = 'Erik - Hello Component';
}