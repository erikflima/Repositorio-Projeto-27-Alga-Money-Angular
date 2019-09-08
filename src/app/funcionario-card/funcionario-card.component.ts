import { Component, OnInit, Input } from '@angular/core';


/*
  Aqui eu defino:
   - Tags que posso usar nas paginas html. Que são os "selectors".
   - Codigo html das tags. Que sao os "templateUrl".
   - CSS do codigo html das tags. Que sao os "styleUrls".x
*/
@Component({

  selector:    'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  styleUrls:   ['./funcionario-card.component.css']

})


export class FuncionarioCardComponent{


   //Criando variaveis globais

   /*A instrucao "@Input()" faz com que essa variavel seja capaz de receber um valor vindo de outro componente. Nesse exemplo, o valor vem do arquivo "app.component.html" */
   @Input() funcionarioDoCard: any;

   numeroExemplo = 1;


   //Metodo para propriedades css
   getEstilosCartao(){

    /*Colocando uma condicao para retornar a propriedade css que desejo.
      Se o numero exemplo for 'par', entao retorna 'lightblue', se nao retorna 'lightgreen' */
     return {backgroundColor: this.numeroExemplo % 2 === 0   ?   'lightblue' : 'lightgreen'};


   }


   // Metodo para propriedades css. Esse metodo nao esta sendo usado em nenhum lugar, so deixei aqui como exemplo para olhar.
   getClassesCss() {

    return ['badge', 'badge-default'];

  }

  verificarSeComecaComTalLetra() {

    // Declarando uma variavel boolean
    let resposta: boolean = false;

    // Verificar se o campo "nome" do objeto "funcionarioDocard" comeca ou nao com a letra 'E'
    resposta = this.funcionarioDoCard.nome.startsWith('E');

    console.log( "Resposta do metodo: " + resposta );

    // True or false
    return resposta
  }


}
