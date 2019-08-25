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
  styleUrls: [ './app.component.css' ]

})


export class AppComponent {

  //Criando variaveia globais
  campoNome       = '';
  arrayDeNomes    = []; //Declaracao de array
  idDaPhoto       = 90;


   adicionar(){

    console.log( "\nExecutando o metodo adicionar" );

    console.log( this.campoNome );

    //Adicionando uma posicao no array. Que nesse caso eh um array de String.
    this.arrayDeNomes.push( this.campoNome );

   }

}