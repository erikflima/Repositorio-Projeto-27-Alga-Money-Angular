import { Component, OnInit } from '@angular/core';


/*
  Aqui eu defino:
   - Tags que posso usar nas paginas html. Que sao os "selectors".
   - Codigo html das tags. Que sao os "templateUrl".
   - CSS do codigo html das tags. Que sao os "styleUrls".x
*/
@Component({
  selector:    'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls:   ['./navbar.component.css']
})
export class NavbarComponent {


  //Metodo
  testeErik(){

    console.log( `Erik` );
  }


}
