import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEspecialidadComponent } from './ver-especialidad.component';

describe('VerEspecialidadComponent', () => {
  let component: VerEspecialidadComponent;
  let fixture: ComponentFixture<VerEspecialidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerEspecialidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerEspecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
