import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-registrar-horario',
  templateUrl: './registrar-horario.component.html',
  styleUrls: ['./registrar-horario.component.css']
})
export class RegistrarHorarioComponent implements OnInit {
  time = {hour: 13, minute: 30};

  constructor() { }

  ngOnInit(): void {
  }

}
