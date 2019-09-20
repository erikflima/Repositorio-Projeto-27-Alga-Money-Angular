import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { AppComponent }  from './app.component';
import {InputTextModule} from 'primeng/primeng'; //Import para poder usar a tag '<input pInputText type="text">' da biblioteca do primeng 4 no arquivo 'app.component.html'.
import {ButtonModule}    from 'primeng/primeng'; //Import para poder usar a tag '<button pButton>' da biblioteca do primeng 4 no arquivo 'app.component.html'.
import {DataTableModule} from 'primeng/primeng'; //Import para poder usar a tag '<p-dataTable>' da biblioteca do primeng 4 no arquivo 'app.component.html'.
import {TooltipModule}   from 'primeng/primeng'; //Import para poder usar a instrucao 'pTooltip' da biblioteca do primeng 4 no arquivo 'app.component.html'.


@NgModule({

  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule
  ],

  providers: [],
  bootstrap: [AppComponent]

})

export class AppModule {
}
