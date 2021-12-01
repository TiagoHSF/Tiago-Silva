import { ModuleWithProviders } from '@angular/compiler/src/core';
import { Routes, RouterModule } from '@angular/router';

import { SobreMimComponent } from './sobre-mim/sobre-mim.component';
import { CertificadoComponent } from './certificado/certificado.component';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';


const APP_ROUTES: Routes = [
    { path: '', component: InicioComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 'certificados', component: CertificadoComponent },
    { path: 'sobre', component: SobreMimComponent },
    { path: 'exp', component: ExperienciaComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES); 