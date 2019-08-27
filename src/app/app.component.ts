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
  ultimoId     = 0;
  nome         = '';
  adicionado   = false;
  funcionarios = [];


  adicionar() {

    console.log( `Adicionando ${this.nome}` );

    this.adicionado = true;

    //Adicionando uma posicao no array. Que nesse caso eh um array de String.
    this.funcionarios.push({

      id: ++this.ultimoId,
      nome: this.nome

    });

  }


}