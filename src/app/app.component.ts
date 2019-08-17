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
  nome            = 'Erik';
  numero          = 0; 
  conteudoDoInput ='';


  //Metodo que inventei
  adicionar(){

      this.numero = this.numero + 1;

      console.log( `Adicionando ${this.nome} ${this.numero}` );
  }


   //Metodo que inventei
   alterarNomeDoAlertAmarelo( eventoRecebido: any ){

      console.log( 'Exibindo o conteudo da variavel recebida: ' );
      
      console.log( eventoRecebido );


      //Pegando o valor que estava dentro da tag 'input' que chamou o metodo.
      this.conteudoDoInput = eventoRecebido.target.value;

  } 


}