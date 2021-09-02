import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TeamComponent } from './pages/team/team.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { HomeComponent } from './pages/home/home.component';
import { EmpleadoListaComponent } from './empleado/empleado-lista/empleado-lista.component';
import { EmpleadoRegistrarComponent } from './empleado/empleado-registrar/empleado-registrar.component';
import { EmpleadoEdicionComponent } from './empleado/empleado-edicion/empleado-edicion.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    AboutusComponent,
    HomeComponent,
    EmpleadoListaComponent,
    EmpleadoRegistrarComponent,
    EmpleadoEdicionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
