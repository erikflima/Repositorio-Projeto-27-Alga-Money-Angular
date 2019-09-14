import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { TabViewModule } from 'primeng/primeng'; //Import para poder usar as tags '<p-tabView>' e '<p-tabPanel>' da biblioteca do primeng 4 no arquivo 'app.component.html'.
import { AppComponent }  from './app.component';


@NgModule({

  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    TabViewModule
  ],

  providers: [],
  bootstrap: [AppComponent]

})

export class AppModule {
}
