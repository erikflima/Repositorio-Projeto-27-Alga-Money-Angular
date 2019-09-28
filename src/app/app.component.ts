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
  salvar(form: NgForm) {

    console.log("formulario recebido pelo: ");
    console.log( form );
  }


    //Metodo
    teste(){

      console.log("Test Erik");

    }

}
