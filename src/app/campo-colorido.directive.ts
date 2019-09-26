import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

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


  }

  /*Esse metodo sera executado quando o campo "<input>" da pagina "funcionario-form.component.html" receber focus.
    A anotacao "@HostListener" serve justamente para dizer qual o evento, como por exemplo "focus", "blur", "click", "mouseleave", entre outros. */
  @HostListener('focus') aoGanharFoco() {

    console.log( "Trocando a cor de fundo do elemento que estou referenciando para amarelo");
    this.renderer.setStyle( this.referenciadorDeElemento.nativeElement, 'background-color', 'yellow' );

  }


  /*Esse metodo sera executado quando o campo "<input>" da pagina "funcionario-form.component.html" perder o focus.
    A anotacao "@HostListener" serve justamente para dizer qual o evento, como por exemplo "focus", "blur", "click", "mouseleave", entre outros. */
  @HostListener('blur') aoPerderFoco() {

    console.log( "Trocando a cor de fundo do elemento que estou referenciando para transparent");
    this.renderer.setStyle( this.referenciadorDeElemento.nativeElement, 'background-color', 'transparent' );
  }


}
