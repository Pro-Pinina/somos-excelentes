import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Route} from '@angular/router';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { EscritorioComponent } from './escritorio/escritorio.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RegistroexcelentesComponent } from './registroexcelentes/registroexcelentes.component';


const routes: Route[]= [
  {path: '',component: InicioComponent},
  {path: 'login', component:LoginComponent},
  {path: 'escritorio', component:EscritorioComponent},
  {path: 'registroexcelentes', component:RegistroexcelentesComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    EscritorioComponent,
    RegistroexcelentesComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
