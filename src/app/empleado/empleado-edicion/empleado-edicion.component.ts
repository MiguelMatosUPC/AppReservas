import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-empleado-edicion',
  templateUrl: './empleado-edicion.component.html',
  styleUrls: ['./empleado-edicion.component.css']
})
export class EmpleadoEdicionComponent implements OnInit {

  empleadoForm = this.fb.group({
    dni: ['', Validators.required],
    nombre: ['', Validators.required],
    apePaterno: ['', Validators.required],
    apeMaterno: ['', Validators.required],
    especialidad: ['', Validators.required]
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
