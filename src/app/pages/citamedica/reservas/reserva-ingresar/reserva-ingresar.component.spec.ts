import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaIngresarComponent } from './reserva-ingresar.component';

describe('ReservaIngresarComponent', () => {
  let component: ReservaIngresarComponent;
  let fixture: ComponentFixture<ReservaIngresarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaIngresarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaIngresarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
