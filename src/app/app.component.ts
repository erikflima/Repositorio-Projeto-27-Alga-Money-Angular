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
  teste ='';


  //Metodo que inventei
  adicionar1( nomeDoElementoRecebido: any ){

 
      console.log( "Conteúdo do parametro recebido: "); 
      console.log( nomeDoElementoRecebido ); //Esse comando vai exibir literalmente o codigo html do elemento.

      console.log( "Valor do parametro recebido: "    +nomeDoElementoRecebido.value );
  }



   //Metodo que inventei
   adicionar2( nomeInputRecebido: string ){

    console.log( "Conteúdo do parametro recebido: " +nomeInputRecebido );
}


}