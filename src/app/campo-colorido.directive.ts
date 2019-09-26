import { Directive, HostListener, HostBinding, Input } from '@angular/core';

//Diretiva que criei. 'Diretivas: São instruções do angular que servem para alterar comportamento ou aparencia de algum  elemento.
@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  //
  @Input() cor = 'gray';

  //@HostBinding -> Serve para que eu possa ter acesso a propriedade do elemento que possui a diretiva que criei (no caso a diretiva que criei foi'appCampoColorido')
  @HostBinding('style.backgroundColor') corDeFundo: string;


  /*Esse metodo sera executado quando o campo "<input>" da pagina "funcionario-form.component.html" receber focus.
    A anotacao "@HostListener" serve justamente para dizer qual o evento, como por exemplo "focus", "blur", "click", "mouseleave", entre outros. */
  @HostListener('focus') aoGanharFoco() {

    console.log( "Trocando a cor de fundo do elemento que estou referenciando");
    this.corDeFundo = this.cor;
  }


  /*Esse metodo sera executado quando o campo "<input>" da pagina "funcionario-form.component.html" perder o focus.
    A anotacao "@HostListener" serve justamente para dizer qual o evento, como por exemplo "focus", "blur", "click", "mouseleave", entre outros. */
  @HostListener('blur') aoPerderFoco() {

    console.log( "Trocando a cor de fundo do elemento que estou referenciando para transparent");
    this.corDeFundo = 'transparent';
  }


}
