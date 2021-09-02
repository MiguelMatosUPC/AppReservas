import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TeamComponent } from './pages/team/team.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { HomeComponent } from './pages/home/home.component';
import { VerEspecialidadComponent } from './pages/ver-especialidad/ver-especialidad.component';
import { RegistrarHorarioComponent } from './pages/registrar-horario/registrar-horario.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    AboutusComponent,
    HomeComponent,
    VerEspecialidadComponent,
    RegistrarHorarioComponent
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
