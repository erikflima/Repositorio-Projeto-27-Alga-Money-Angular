import { NgForm }    from '@angular/forms';
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

  //Metodo que recebe o formulario inteiro da tela.
  salvar(formularioDaPagina: NgForm) {

    console.log("formulario recebido pelo: ");
    console.log( formularioDaPagina );

    console.log("\n\n------------------------------------------------------------------");
    console.log("Conteudo do campo nome: "     +formularioDaPagina.value.campoNome      );
    console.log("Conteud do campo e-mail: "    +formularioDaPagina.value.campoEmail     );
    console.log("Conteud do campo profissao: " +formularioDaPagina.value.campoProfissao );
  }


    //Metodo
    teste(){

      console.log("Test Erik");

    }

}
