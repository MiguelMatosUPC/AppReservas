import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuidaComponent } from './cuida.component';

describe('CuidaComponent', () => {
  let component: CuidaComponent;
  let fixture: ComponentFixture<CuidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
