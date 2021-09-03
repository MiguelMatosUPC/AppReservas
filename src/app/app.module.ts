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
import { VerEspecialidadComponent } from './pages/ver-especialidad/ver-especialidad.component';
import { RegistrarHorarioComponent } from './pages/registrar-horario/registrar-horario.component';
import { HomePacienteComponent } from './app/pages/home-paciente/home-paciente.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    AboutusComponent,
    HomeComponent,
    EmpleadoListaComponent,
    EmpleadoRegistrarComponent,
    EmpleadoEdicionComponent,
    VerEspecialidadComponent,
    RegistrarHorarioComponent,
    HomePacienteComponent
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
