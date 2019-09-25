import { Directive, ElementRef, Renderer2 } from '@angular/core';

//Diretiva que criei. 'Diretivas: São instruções do angular que servem para alterar comportamento ou aparencia de algum  elemento.
@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {


  //ElementRef -> Eh um objeto que o angular injeta pra mim, e posso usar esse objeto para acessar o "elemento hospedero", ou seja, um elemento especifico que esteja na pagina que eu estiver mexendo.
  //Renderer2  -> Eh um objeto que o angular injta pra mim, que posso usar para manipular elementos
  constructor( private referenciadorDeElemento: ElementRef, private renderer: Renderer2 ){

    console.log( "Elemento html que estou referenciando e que posso manipular: ");
    console.log( this.referenciadorDeElemento.nativeElement );
    console.log( "\n");

    //Trocando a cor de fundo do elemento que estou referenciando
    this.renderer.setStyle( this.referenciadorDeElemento.nativeElement, 'background-color', 'yellow' );
  }

}
