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
  conteudoDoPrimeiroInput  = '';
  conteudoDoSegundoInput   = '';
  conteudoDoTerceiroInput  = '';




   //Metodo que inventei
   alterarValorDoConteudoDoSegundoInput( eventoRecebido: any){

    console.log( "\nConteudo do parametro recebido:" );
    console.log( eventoRecebido );
    this.conteudoDoSegundoInput = eventoRecebido.target.value; 
   }


    //Metodo que inventei
    imprimirMensagemNoConsole1(){

      console.log( "\nBotao azul foi pressionado" );
      console.log( "Valor da variavel 'conteudoDoPrimeiroInput': " +this.conteudoDoPrimeiroInput );
    }


    //Metodo que inventei
    imprimirMensagemNoConsole2(){

      console.log( "\nBotao verde foi pressionado" );
      console.log( "Valor da variavel 'conteudoDoSegundoInput': " +this.conteudoDoSegundoInput );
    }


    //Metodo que inventei
    imprimirMensagemNoConsole3(){

      console.log( "\nBotao amarelo foi pressionado" );
      console.log( "Valor da variavel 'conteudoDoTerceiroInput': " +this.conteudoDoTerceiroInput );
    }
}