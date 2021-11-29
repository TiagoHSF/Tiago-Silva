import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { SobreMimComponent } from './sobre-mim/sobre-mim.component';
import { HomeComponent } from './home/home.component';
import { CertificadoComponent } from './certificado/certificado.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    SobreMimComponent,
    HomeComponent,
    CertificadoComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
