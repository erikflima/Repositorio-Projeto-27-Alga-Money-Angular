import { NgForm }    from '@angular/forms';
import { Component } from '@angular/core';


 //Criando uma classe aqui mesmo, mas poderia deixar em um arquivo separado e importar ela.
 class Cliente {
  nome:      string;
  email:     string;
  profissao: string;
}

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


  //Array.
  listaDeProfissoes = ['Programador', 'Empresário', 'Outra'];

  //Criando uma instancia da classe interna que criei.
  cliente: Cliente = new Cliente() ;


  //Metodo que recebe o formulario inteiro da tela.
  salvar(formularioDaPagina: NgForm) {

    console.log("formulario recebido pelo: ");
    console.log( formularioDaPagina );

    console.log("\n\n---------------------Conteudo do formulario-----------------------" );
    console.log("Conteudo do campo nome: "      +formularioDaPagina.value.campoNome      );
    console.log("Conteudo do campo e-mail: "    +formularioDaPagina.value.campoEmail     );
    console.log("Conteudo do campo profissao: " +formularioDaPagina.value.campoProfissao );

    console.log("\n\n--------------Verificando se o formulario eh ou nao valido de acordo com as validacoes dos campos---------" );
    console.log("Formulario valido: " +formularioDaPagina.valid );


    //Pegando o conteudo do formulario recebido e preenchendo o meu objeto 'cliente'
    //this.cliente.nome      = formularioDaPagina.value.campoNome;
    //this.cliente.email     = formularioDaPagina.value.campoEmail;
    //this.cliente.profissao = formularioDaPagina.value.campoProfissao;

    console.log("\n\n---------------------Conteudo do cliente---------------------------" );
    console.log(this.cliente ); 


  }


    //Metodo
    teste(){
      console.log("Test Erik");
    }

}