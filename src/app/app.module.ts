import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePacienteComponent } from './pages/home-paciente/home-paciente.component';
import { PacienteRegistrarComponent } from './pages/paciente/paciente-registrar/paciente-registrar.component';
import { PacienteIngresarComponent } from './pages/paciente/paciente-ingresar/paciente-ingresar.component';

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
    HomePacienteComponent,
    PacienteRegistrarComponent,
    PacienteIngresarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
