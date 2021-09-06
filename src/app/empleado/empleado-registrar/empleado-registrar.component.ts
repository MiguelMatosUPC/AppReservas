import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-empleado-registrar',
  templateUrl: './empleado-registrar.component.html',
  styleUrls: ['./empleado-registrar.component.css']
})
export class EmpleadoRegistrarComponent implements OnInit {

  empleadoForm = this.fb.group({
    tipo_doc: ['', Validators.required],
    nro_doc: ['', Validators.required],
    nombre: ['', Validators.required],
    apePaterno: ['', Validators.required],
    apeMaterno: ['', Validators.required],
    sexo: ['', Validators.required],
    telefono: ['', Validators.required],
    cargo: ['', Validators.required],
    especialidad: ['', Validators.required],
    email: ['', Validators.required],
    usuario: ['', Validators.required],
    password_1: ['', Validators.required],
    password_2: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  _onSubmit(){
    if (this.empleadoForm.valid) {
      console.log(this.empleadoForm.value);
    } else {
      alert("Formulario no válido");
    }
  }

  ngOnInit(): void {
  }

}
