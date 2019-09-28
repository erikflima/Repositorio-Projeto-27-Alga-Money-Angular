import { Component, OnInit } from '@angular/core';

/*
  Aqui eu defino:
   - Tags que posso usar nas paginas html. Que sao os "selectors".
   - Codigo html das tags. Que sao os "templateUrl".
   - CSS do codigo html das tags. Que sao os "styleUrls".x
*/
@Component({
  selector:    'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls:   ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent{

  //Criando um array de objetos javascript.
  pessoas = [
    { nome: 'Manoel Pinheiro',    cidade: 'Uberlândia',     estado: 'MG', ativo: true  },
    { nome: 'Sebastião da Silva', cidade: 'São Paulo',      estado: 'SP', ativo: false },
    { nome: 'Carla Souza',        cidade: 'Florianópolis',  estado: 'SC', ativo: true  },
    { nome: 'Luís Pereira',       cidade: 'Curitiba',       estado: 'PR', ativo: true  },
    { nome: 'Vilmar Andrade',     cidade: 'Rio de Janeiro', estado: 'RJ', ativo: false },
    { nome: 'Paula Maria',        cidade: 'Uberlândia',     estado: 'MG', ativo: true  }
  ];

  //Metodo
  testeErik(){

    console.log( `Erik` );
  }

}
