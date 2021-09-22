import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TeamComponent } from './pages/team/team.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { HomeComponent } from './pages/home/home.component';
import { EmpleadoListaComponent } from "./empleado/empleado-lista/empleado-lista.component";
import { EmpleadoRegistrarComponent } from "./empleado/empleado-registrar/empleado-registrar.component";
import { EmpleadoEdicionComponent } from "./empleado/empleado-edicion/empleado-edicion.component";
import { VerEspecialidadComponent } from './pages/ver-especialidad/ver-especialidad.component';
import { RegistrarHorarioComponent } from './pages/registrar-horario/registrar-horario.component';
import { HomePacienteComponent } from "./pages/home-paciente/home-paciente.component";
import { PacienteRegistrarComponent } from "./pages/paciente/paciente-registrar/paciente-registrar.component";
import { PacienteIngresarComponent } from "./pages/paciente/paciente-ingresar/paciente-ingresar.component";
import { CuidaComponent } from './pages/citamedica/reservas/cuida/cuida.component';
import { CuraComponent } from './pages/citamedica/reservas/cura/cura.component';
import { ReservaIngresarComponent } from './pages/citamedica/reservas/reserva-ingresar/reserva-ingresar.component';

const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'team',component:TeamComponent},
    {path:'home-paciente',component:HomePacienteComponent},
    {path:'paciente-registrar',component:PacienteRegistrarComponent},
    {path:'paciente-ingresar',component:PacienteIngresarComponent},
    {path:'empleado/lista',component:EmpleadoListaComponent},
    {path:'empleado/registrar',component:EmpleadoRegistrarComponent},
    {path:'empleado/:empleadoId',component:EmpleadoEdicionComponent},
    {path:'especialidades',component:VerEspecialidadComponent},
    {path:'horario/registrar',component:RegistrarHorarioComponent},
    {path:'citamedica/reservas/cuida',component:CuidaComponent},
    {path:'citamedica/reservas/cura',component:CuraComponent},
    {path:'citamedica/reservas/reserva-ingresar',component:ReservaIngresarComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
