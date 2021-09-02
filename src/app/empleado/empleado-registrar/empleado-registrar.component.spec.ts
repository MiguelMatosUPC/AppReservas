import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoRegistrarComponent } from './empleado-registrar.component';

describe('EmpleadoRegistrarComponent', () => {
  let component: EmpleadoRegistrarComponent;
  let fixture: ComponentFixture<EmpleadoRegistrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadoRegistrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
