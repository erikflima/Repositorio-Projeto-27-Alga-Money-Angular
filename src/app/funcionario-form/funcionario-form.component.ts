import { Component, OnInit, EventEmitter, Output } from '@angular/core';


/*
  Aqui eu defino:
   - Tags que posso usar nas paginas html. Que sao os "selectors".
   - Codigo html das tags. Que sao os "templateUrl".
   - CSS do codigo html das tags. Que sao os "styleUrls".x
*/
@Component({
  selector:    'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls:   ['./funcionario-form.component.css']
})

export class FuncionarioFormComponent{

  //Criando variaveis globais
  ultimoId     = 0;
  nome         = '';
  adicionado   = false;

  /*A instrucao "@Output()" faz com que essa variavel seja capaz enviar variaveis/objetos para outra classe. Ou seja, ela se torna tipo um enviador de variaveis entre classes. */
  @Output() funcionarioAdicionado = new EventEmitter(); //Emissor de eventos


  adicionar() {

    console.log( `Adicionando ${this.nome}` );

    this.adicionado = true;

    //Declarando uma variavel constante
    const funcionario = {
      id:   ++this.ultimoId,
      nome: this.nome
    };


    /* O metodo "emit()" serve para mandar um objeto/variavel para outra classe.
       Nesse exemplo, a variavel "funcionario" sera enviada como parametro para o metodo "aoAdicionar()" que eta na classe "app.component.ts" */
    this.funcionarioAdicionado.emit( funcionario );

  }


}