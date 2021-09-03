import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteIngresarComponent } from './paciente-ingresar.component';

describe('PacienteIngresarComponent', () => {
  let component: PacienteIngresarComponent;
  let fixture: ComponentFixture<PacienteIngresarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteIngresarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteIngresarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
