import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraCamisetaComponent } from './calculadora-camiseta.component';

describe('CalculadoraCamisetaComponent', () => {
  let component: CalculadoraCamisetaComponent;
  let fixture: ComponentFixture<CalculadoraCamisetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraCamisetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraCamisetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
