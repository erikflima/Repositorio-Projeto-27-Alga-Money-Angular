import { Component, OnInit, Input } from '@angular/core';


/*
  Aqui eu defino:
   - Tags que posso usar nas paginas html. Que sao os "selectors".
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
   @Input() funcionarioDoCard: any; 

}