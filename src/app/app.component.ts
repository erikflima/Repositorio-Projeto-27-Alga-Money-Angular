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
  campoNome       = 'Erik';
  campoNumero     = 0;
  campoAdicionado = false;


   adicionar(){

    console.log( "\nExecutando o metodo adicionar" );


    //Mundando o valor da variavel
    this.campoAdicionado = true;


    //Somando 1 na variavel numero
    this.campoNumero = this.campoNumero + 1;


    //Concatenando a variavel "campoNome" com a variavel "campoNumero"
    this.campoNome = this.campoNome + " : " + this.campoNumero;

    
    console.log( this.campoNome );

   }

}