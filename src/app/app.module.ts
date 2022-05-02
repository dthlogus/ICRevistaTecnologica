import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UltimasNoticasCardComponent } from './views/pages/ultimas-noticas-card/ultimas-noticas-card.component';
import {PaginaPrincipalMainComponent} from "./views/pages/pagina-principal-main/pagina-principal-main.component";

@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalMainComponent,
    UltimasNoticasCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
