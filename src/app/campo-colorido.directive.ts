import { Directive, HostListener, HostBinding, Input } from '@angular/core';

//Diretiva que criei. 'Diretivas: São instruções do angular que servem para alterar comportamento ou aparencia de algum  elemento.
@Directive({
  selector: '[appCampoColorido]',
  exportAs: 'campoColorido'
})
export class CampoColoridoDirective {

  //
  @Input() cor = 'gray';

  //@HostBinding -> Serve para que eu possa ter acesso a propriedade do elemento que possui a diretiva que criei (no caso a diretiva que criei foi'appCampoColorido')
  @HostBinding('style.backgroundColor') corDeFundo: string;


  /* */
  @HostListener('focus') colorir() {

    console.log( "Trocando a cor de fundo do elemento que estou referenciando");
    this.corDeFundo = this.cor;
  }


  /* */
  @HostListener('blur') descolorir() {

    console.log( "Trocando a cor de fundo do elemento que estou referenciando para transparent");
    this.corDeFundo = 'transparent';
  }


}
