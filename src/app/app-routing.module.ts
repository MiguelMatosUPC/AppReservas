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

const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'team',component:TeamComponent},
    {path:'empleado/lista',component:EmpleadoListaComponent},
    {path:'empleado/registrar',component:EmpleadoRegistrarComponent},
    {path:'empleado/:empleadoId',component:EmpleadoEdicionComponent},
    {path:'especialidades',component:VerEspecialidadComponent},
    {path:'horario/registrar',component:RegistrarHorarioComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
