import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-paciente-registrar',
  templateUrl: './paciente-registrar.component.html',
  styleUrls: ['./paciente-registrar.component.css']
})
export class PacienteRegistrarComponent implements OnInit {

  pacienteForm = this.fb.group({
    nombres: ['',[Validators.required]],
    apellidos: ['',[Validators.required]],
    sexo: ['',[Validators.required]],
    tipo_documento: ['',[Validators.required]],
    numero_documento: ['',[Validators.required]],
    telefono: ['',[Validators.required]],
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required]]
  });

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
