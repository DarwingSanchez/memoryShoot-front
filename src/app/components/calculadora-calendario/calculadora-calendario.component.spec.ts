import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraCalendarioComponent } from './calculadora-calendario.component';

describe('CalculadoraCalendarioComponent', () => {
  let component: CalculadoraCalendarioComponent;
  let fixture: ComponentFixture<CalculadoraCalendarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraCalendarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraCalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
