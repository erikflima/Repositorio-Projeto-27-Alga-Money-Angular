import { enableProdMode }         from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule }              from './app/app.module';                   //Declaro aqui o endereco do meu arquivo module.
import { environment }            from './environments/environment';


if (environment.production) {
  enableProdMode();
}

/*
  1)Tudo comeca aqui.
    Ao rodar o projeto, o codigo abaixo eh executado.
    Ai o Angular carrega o modulo principal do projeto, que eh o arquivo "app.module.ts"(AppModule), mas poderia ter qualquer outro nome que eu inventar. 
 */
platformBrowserDynamic().bootstrapModule(AppModule);