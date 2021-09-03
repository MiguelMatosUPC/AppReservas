import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-paciente-ingresar',
  templateUrl: './paciente-ingresar.component.html',
  styleUrls: ['./paciente-ingresar.component.css']
})
export class PacienteIngresarComponent implements OnInit {

  pacienteLoginForm = this.fb.group({
    email: ['',[Validators.required]],
    password: ['',[Validators.required]]
  });

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
